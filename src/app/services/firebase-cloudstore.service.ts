import { Injectable } from '@angular/core';
import { getDatabase } from 'firebase/database';
import { collection, doc, setDoc, Firestore, onSnapshot, getDocs } from "firebase/firestore";
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { ContentObserver } from '@angular/cdk/observers';

interface Item {
  name: string,
  content: any,
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudstoreService {
  collection(arg0: string): AngularFirestoreCollection<Task> {
    throw new Error('Method not implemented.');
  }
  holder: any;
  todo = getObservable(this.store.collection('todo')) as Observable<Task[]>;

  constructor(private store: AngularFirestore) {
  }

  async write(dir: string, name: string, input: any) {
    this.store.collection(dir).doc(name).set({
      name: "LoSSs ",
      state: "CA",
      country: "USA"
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writ0ing document: ", error);
      });
  }

  async write3(refDir: string, input: any) {
    // return await this.store.collection(refDir).doc(input.name).set(input)
    let x = await this.store.collection(refDir).doc(input.name).set(input)
    return x
  }

  addFile(refDir: string, input: any) {
    var washingtonRef = this.store.collection("uploadStorage");
    return washingtonRef.add(input)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.collection;
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

  async update(dir: string, name: string, input: any) {
    return this.store.collection(dir).doc(name).update({
      capital: true
    })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  async add(dir: string, input: any) {
    await this.store.collection(dir).add(input)
      .then((snapshot) => {
        console.log(snapshot);
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  read(dir: string, input: any) {
    return getObservable(this.store.collection(dir)) as Observable<Task[]>;
  };

  delete(dir: string, itemId: string) {
    this.store.collection(dir).doc(itemId).delete().then((x) => {
      console.log("Document successfully deleted!", x);
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    return
  }

}

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};
