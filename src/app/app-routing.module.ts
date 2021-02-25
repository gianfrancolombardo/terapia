import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingClientComponent } from './landing-client/landing-client.component';
import { LandingCouchComponent } from './landing-couch/landing-couch.component';
import { LandingProfessionalComponent } from './landing-professional/landing-professional.component';


const routes: Routes = [
  { path: '', component: LandingCouchComponent },
  { path: 'soy-psicologo', component: LandingProfessionalComponent },
  { path: 'soy-pasiente', component: LandingClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
