import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingClientComponent } from './landing-client/landing-client.component';
import { LandingProfessionalComponent } from './landing-professional/landing-professional.component';


const routes: Routes = [
  { path: '', component: LandingClientComponent },
  { path: 'soy-psicologo', component: LandingProfessionalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
