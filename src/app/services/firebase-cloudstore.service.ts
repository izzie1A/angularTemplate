import { Injectable } from '@angular/core';
import { getDatabase } from 'firebase/database';
import { collection, doc, setDoc, Firestore, onSnapshot } from "firebase/firestore";
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudstoreService {
  holder: any;

  constructor(private store: AngularFirestore) {
    this.store.collection("storage/public/cities").doc("LA").set({
      name: "Los Angele2s",
      state: "CA",
      country: "USA"
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  write(dir: string, input: any) {
    this.store.collection(dir).doc(input).set(input.value).catch((error) => {
      console.error("error message" + error);
    })
  }

  read(dir: string, input: any) {
    this.store.collection(dir).doc(input).set(input.value).catch((error) => {
      console.error(error);
    })
  }


  read2(dir: string, input: any) {
    let todo = getObservable(this.store.collection('todo')) as Observable<Task[]>;
  }




}

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};
