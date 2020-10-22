
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { FirebaseService } from '../firebase.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-client',
  templateUrl: './landing-client.component.html',
  styleUrls: ['./landing-client.component.css']
})
export class LandingClientComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  form_submitted = false;
  // tslint:disable-next-line: variable-name
  form_sending = false;
  // tslint:disable-next-line: variable-name
  form_notify: FormGroup;
  // tslint:disable-next-line: variable-name
  form_result = null;
  // tslint:disable-next-line: variable-name
  form_cleaned = false;


  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private pageScrollService: PageScrollService,
    private router: Router,
    @Inject(DOCUMENT) private document: any) {
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
        this.firebase.sendmail(this.form_notify.value);
        this.firebase.AnalyticsCustomEvents('notifyForm', 'clients');
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

  Analytics(button: string, landing: string): void
  {
    this.firebase.AnalyticsCustomEvents(button, landing);
  }
  gotoProfessionalLanding()
  {
    this.firebase.AnalyticsCustomEvents('gotoProfessional', 'client');
    this.router.navigate(['soy-psicologo']);
  }
}
