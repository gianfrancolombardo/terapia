import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingClientComponent } from './landing-client/landing-client.component';
import { LandingProfessionalComponent } from './landing-professional/landing-professional.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingClientComponent,
    LandingProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
