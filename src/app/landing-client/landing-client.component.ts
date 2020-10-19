import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-landing-client',
  templateUrl: './landing-client.component.html',
  styleUrls: ['./landing-client.component.css']
})
export class LandingClientComponent implements OnInit {

  form_submitted = false
  form_sending = false
  form_notify: FormGroup
  form_result = null


  constructor(
    private _buiil: FormBuilder,
    private _firebase: FirebaseService) {

    this.form_notify = this._buiil.group({
      name: ['',],
      email: ['', [Validators.required, Validators.email]],
      type: [0, Validators.required]
    })
  }

  ngOnInit(): void {
    AOS.init();
  }

  get f() { return this.form_notify.controls; }

  submit_notify() {
    this.form_submitted = this.form_sending = true;
    if (this.form_notify.valid) {
      this._firebase.notify(this.form_notify.value).then(res => {
        this.form_result = true
        this.form_submitted = false
        this.form_notify.reset();
      }).catch(err => {
        this.form_result = false
        console.log(err)
      }).finally(() => {
        this.form_sending = false
      })
    }else
      this.form_sending = false
  }

}
