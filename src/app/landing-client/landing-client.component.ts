
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

  form_submitted = false;
  form_sending = false;
  form_notify: FormGroup;
  form_result = null;
  form_cleaned = false;


  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService) {
  }

  ngOnInit(): void {
    AOS.init();
    this.buildForm();
  }

  private buildForm(): any {
    this.form_notify = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      type: [0, Validators.required]
    });

  }

  notify(event: Event): any {
    event.preventDefault();
    this.form_submitted = this.form_sending = true;
    if (this.form_notify.valid) {
      this.firebase.newSuscriber(this.form_notify.value).then(res => {
        this.form_result = true;
        this.form_submitted = false;
        this.form_cleaned = false;
        this.form_notify.reset();
      }).catch(err => {
        this.form_result = false;
        console.log(err);
      }).finally(() => {
        this.form_sending = false;
        this.form_cleaned = false;
      });
    } else {
      this.form_sending = false;
      this.form_cleaned = true;
    }

  }

}
