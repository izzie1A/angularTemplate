import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/compat/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name?: string,
};
@Injectable({
  providedIn: 'root'
})

export class FirebaseCloudService {
  item$: Observable<Item[]>;
  constructor(private firestore: AngularFirestore) {
    this.item$ = new Observable<Item[]>;
  }

  test(){
    return this.getCollection();
  }
  
  test2(){
    const collection = this.firestore.collection('items');
    let x = this.firestore.collection('Users', ref => ref.where('item','==','whatever'));
    console.log(x);
  }

  getCollection(dir?:string){
    if(dir!==undefined){
      return this.firestore.collection(dir).valueChanges();
    }else{
      return this.firestore.collection('root').valueChanges();
    }
  }
  getDoc(dir:string) {
    return this.firestore.doc(dir);
  }

  query(){
  }

  addDoc(dir:string,item: any) {
    item.uid = this.firestore.createId();
    item.timeStamp = Date.now().toString();
    const itemsCollection = this.firestore.collection(dir.toString());
    return Promise.resolve(itemsCollection.doc(item.uid).set(item))

  }
  writeDoc(dir:string,item:any) {
    const doc = this.firestore.doc(dir.toString());
    console.log(doc.update(item));
  }

  queryUpload(){
  }

  delete(dir: string, itemId: string) {
    this.firestore.collection(dir).doc(itemId).delete().then((x) => {
      console.log("Document successfully deleted!", x);
      alert( x);
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    return
  }
}
