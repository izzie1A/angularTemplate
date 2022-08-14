import { Injectable } from '@angular/core';
import { getDatabase } from 'firebase/database';
import { collection, doc, setDoc, Firestore } from "firebase/firestore"; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudstoreService {

  
  constructor(public store: AngularFirestore) {
   }

}
