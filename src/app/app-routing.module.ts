import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingClientComponent } from './landing-client/landing-client.component';


const routes: Routes = [
  { path: '', component: LandingClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
