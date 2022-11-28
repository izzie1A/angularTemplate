import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudService {

  constructor(private firestore: AngularFirestore) { }

  test(){
    return this.getCollection();
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
    itemsCollection.doc(item.uid).set(item);
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
