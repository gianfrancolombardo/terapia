import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  public notify(data){
    return fetch(environment.functions.notify, {
        body: JSON.stringify(data),
        method: 'POST',
        mode: 'no-cors'
    })
  }
}
