import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Suscriber } from './suscription.model';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afs: AngularFirestore) { }

  newSuscriber(data) {
    console.log(data);
    const subscriberRef: AngularFirestoreDocument<any> = this.afs.doc(`landing/clients/subscribers/${data.email}`);
    const subscriberData: Suscriber = {
      email: data.email,
      name: data.name,
      type: data.type
    };
    return subscriberRef.set(subscriberData, {
      merge: true
    });
  }
}
