import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { FirebaseService } from '../firebase.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import { NgxHotjarService } from 'ngx-hotjar';
@Component({
  selector: 'app-landing-professional',
  templateUrl: './landing-professional.component.html',
  styleUrls: ['./landing-professional.component.css']
})
export class LandingProfessionalComponent implements OnInit {

  form_submitted = false;
  form_sending = false;
  form_notify: FormGroup;
  form_result = null;
  form_cleaned = false;


  constructor(
    private formBuilder: FormBuilder,
    private firebase: FirebaseService,
    private hjService: NgxHotjarService) {
  }

  ngOnInit(): void {
    (this.hjService.lib as any).myBrandNewStaticFn();
    this.hjService.virtualPageView('professional');
    AOS.init();
    this.buildForm();
  }

  private buildForm(): any {
    this.form_notify = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      type: [1, Validators.required]
    });

  }

  notify(event: Event): any {
    event.preventDefault();
    this.form_submitted = this.form_sending = true;
    if (this.form_notify.valid) {
      this.firebase.newSuscriber(this.form_notify.value).then(res => {
        this.firebase.sendmail(this.form_notify.value);
        this.firebase.AnalyticsCustomEvents('notifyForm', 'professional');
        this.hjService.formSubmitSuccessful();
        this.form_result = true;
        this.form_submitted = false;
        this.form_cleaned = false;
        this.form_notify.reset();

      }).catch(err => {
        this.hjService.formSubmitFailed();
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
    this.hjService.trigger(button);
    this.firebase.AnalyticsCustomEvents(button, landing);
  }
}
