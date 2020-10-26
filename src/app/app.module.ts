import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingClientComponent } from './landing-client/landing-client.component';
import { LandingProfessionalComponent } from './landing-professional/landing-professional.component';



/* Firebase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule, CONFIG, DEBUG_MODE, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
/* End Firebase */

/* Environment */
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxHotjarModule } from 'ngx-hotjar';
import { TabsModule  } from 'ngx-bootstrap/tabs';
/* End Environment */

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase_config),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule,
    NgxHotjarModule.forRoot(environment.hotjar.id),
    TabsModule.forRoot()
  ],
  providers: [FirebaseService, ScreenTrackingService, UserTrackingService, 
    { provide: CONFIG, useValue: {
      DEBUG_MODE: true
    } },
    { provide: DEBUG_MODE, useValue: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
