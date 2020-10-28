import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Suscriber } from './suscription.model';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { analytics } from 'firebase';
import { firestore } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore, public analytics: AngularFireAnalytics) { }

  newSuscriber(data) {
    console.log(data);
    let subscriberRef: AngularFirestoreDocument<any> ;
    if (data.type === 0)
    {
      subscriberRef = this.afs.doc(`landing/clients/subscribers/${data.email}`);

    }
    if (data.type === 1)
    {
      subscriberRef = this.afs.doc(`landing/professional/subscribers/${data.email}`);

    }
    const subscriberData: Suscriber = {
      email: data.email,
      name: data.name,
      type: data.type
    };
    return subscriberRef.set(subscriberData, {
      merge: true
    });
  }

  sendmail(data) {
    return this.afs.collection('mail').add({
      from: 'hola@enoos.io',
      to: data.email,
      template: {
        name: 'welcome',
        data:
        {
          name: data.name
        }
      }
    });
  }
  AnalyticsCustomEvents(button, landing){
    this.analytics.logEvent(button, {landing});
  }
  clickFeatures(type, status){
    console.log(status);
    if (status)
    {
      this.afs.collection('click').doc(type).update({value: firestore.FieldValue.increment(1)});
    }
  }
}
