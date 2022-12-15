import { Injectable } from '@angular/core';
import { first, Observable, of, switchMap } from 'rxjs';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';
import { User } from './../interface/user.model';
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { FirebaseCloudService } from 'src/app/services/firebase-cloud.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  user$: Observable<User> | any;
  provider: any;
  auth : any;
  constructor(private firebase: FirebaseRtdbService, private firestore: FirebaseCloudService) {
    this.user$ = null;
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.user$ = user;
      } else {
      }
    });
  }

  getUser(){
    console.log(this.user$.pipe(first()).toPromise());
    return this.user$.pipe(first()).toPromise();
  }
  
  gSignin(){
    let x = signInWithPopup(this.auth, this.provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        this.user$ = result.user;
        console.log(result.user)
        this.firestore.testWriteDoc('root/user'+result.user.uid,{
          displayName: result.user.displayName,
          email: result.user.email,
          profile_picture: result.user.photoURL,
          uid: result.user.uid,
        });
        return this.user$
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  ygSignin(){
    let x = signInWithPopup(this.auth, this.provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        this.user$ = result.user;
        this.firebase.writeUserData(result.user);
        return this.user$
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  gSignout(){
    signOut(this.auth).then(() => {
      this.user$ = null;
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
    
  }


}
