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
  // item$: Observable<Item[]>;
  constructor(private firestore: AngularFirestore) {
    // this.item$ = new Observable<Item[]>;
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

  uploadDoc(dir:string){
    this.firestore.doc('dir');
  }
  testWriteDoc(dir:string, input:any){
    let result = this.getDoc(input);
    console.log(result); 
    if(result!=undefined){
      console.log('write'); 
      this.writeDoc(dir, input);
    } else{
      console.log('add'); 
      this.addDoc(dir, input);
    }                                                                  
  }
  addDoc(dir:string,item: any) {
    item.uid = this.firestore.createId();
    item.timeStamp = Date.now().toString();
    const itemsCollection = this.firestore.collection(dir.toString());
    console.log(itemsCollection)
    return Promise.resolve(itemsCollection.doc(item.uid).set(item))
  }
  writeDoc(dir:string,item:any) {
    const doc = this.firestore.doc(dir.toString());
    const result = doc.update(item)
    console.log(result);
  }

  delete(dir: string, itemId: string) {
    this.firestore.collection(dir).doc(itemId).delete().then((x) => {
      console.log("Document successfully deleted!", x);
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
    return
  }
}
