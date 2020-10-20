import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingClientComponent } from './landing-client/landing-client.component';



/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
/* end Firebase */
/* Environment */

import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';

/* end Environment */

@NgModule({
  declarations: [
    AppComponent,
    LandingClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
