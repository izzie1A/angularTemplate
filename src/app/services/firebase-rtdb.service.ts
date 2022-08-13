import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getDatabase, ref, set, get, push, child, onValue, onChildMoved, onChildChanged, DataSnapshot, onChildAdded } from "firebase/database";
interface Item {
  name: string,
};

@Injectable({
  providedIn: 'root'

})

export class FirebaseRtdbService {
  db: any;
  holder: any;
  rootDir: string;

  constructor(firestore: Firestore) {
    this.db = getDatabase();
    this.rootDir = "root/"
  }

  writeUserData(userFile: any) {
    set(ref(this.db, this.rootDir + "userId/"+userFile.uid), {
      displayName: userFile.displayName,
      email: userFile.email,
      profile_picture: userFile.photoURL,
      uid: userFile.uid,
    });
  }

  writeData(key: any, value: any) {
    set(ref(this.db, this.rootDir + "chat/" + key), value);
  }

  pushData(key: any, value: any) {
    const db = getDatabase();
    const postListRef = ref(db, key);
    const newPostRef = push(postListRef);
    set(newPostRef, value);
  }

  getData(input: string): any {
    const dbRef = ref(getDatabase());
    get(child(dbRef, this.rootDir + `/${input}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.holder = snapshot.val();
      } else {
        this.holder = "No data available";
      }

    }).catch((error) => {
      console.error(error);
    });
    console.log('get' + this.holder)
    return this.holder;
  }

  watchData(dir: string): any {
    const dbRef = ref(this.db, dir);
    let data: DataSnapshot;
    onValue(dbRef, (snapshot) => {
      snapshot = snapshot.val();
      data = snapshot;
      console.log(data);
    }, {
      onlyOnce: true
    });
  }

  watchList() {
    const db = getDatabase();
    const dbRef = ref(db, '/root');
  }

  set(dir:string,input:any) {
    const db = getDatabase();
    set(ref(db, dir), input);
  }

  async read(dir:string):Promise<number>{
    const db = getDatabase();
    const snapshot = await get(ref(db,dir))
    console.log(snapshot.val().qnumber)
    let user = snapshot.val().qnumber;
    return snapshot.val();
  }

  async readChildList(dir:string):Promise<any[]>{
    console.log("?")
    const db = getDatabase();
    let x :any[]= [];
    await onValue(ref( db,dir), (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey,childData);
        childSnapshot.forEach((child: any)=>{
          console.log(child)
        })
        x.push([childKey,childData]);
        // ...
      });
      
    }, {
      onlyOnce: true
    });
    return x;
  }

}
