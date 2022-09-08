import { Injectable } from '@angular/core';
import { getDatabase } from 'firebase/database';
<<<<<<< HEAD
import { collection, doc, setDoc, Firestore, deleteDoc} from "firebase/firestore"; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
=======
import { collection, doc, setDoc, Firestore, onSnapshot } from "firebase/firestore";
>>>>>>> a616222d6f5fe0f63eab9684dd484022cbe6f08d
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';


interface Item {
  name: string,
  content:any,
};

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
=======
export class FirebaseCloudstoreService {
  holder: any;
>>>>>>> a616222d6f5fe0f63eab9684dd484022cbe6f08d

<<<<<<< HEAD
export class FirebaseCloudstoreService {
  item$: Observable<Item[]>;
  
  constructor(public store: AngularFirestore, firestore: Firestore) {
   }
=======
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
>>>>>>> a616222d6f5fe0f63eab9684dd484022cbe6f08d

<<<<<<< HEAD
   createData(dir:string, input:any){
    this.store.collection(dir).add(input);
   }

   async createDoc(dir:string, input:any){
    const docData = {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    }
    await setDoc(doc(db, "cities", "LA"), docData , { merge: true });
   }

   async updateDoc(dir:string, input:any){
    const updateRef = doc(db, "cities", "DC");
    await updateDoc(updateRef, {
      capital: true
    });
   }

   pushDoc(ir:string, input:any){
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
   }

   getRef(dir:string){
    return doc(collection(db, dir));
   }

   async delDoc(dir:string){
    await deleteDoc(doc(db, "cities", "DC"));
   }

=======
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




>>>>>>> a616222d6f5fe0f63eab9684dd484022cbe6f08d
}

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};
