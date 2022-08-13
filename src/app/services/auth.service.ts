import { Injectable } from '@angular/core';
import { first, Observable, of, switchMap } from 'rxjs';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';
import { User } from './../interface/user.model';
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
  user$: Observable<User> | any;
  provider: any;
  auth : any;
  constructor(private firebase: FirebaseRtdbService) {
    this.user$ = null;
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();

  }
  getUser(){
    console.log(this.user$.pipe(first()).toPromise());
    return this.user$.pipe(first()).toPromise();
  }
  gSignin(){
    let x = signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        this.user$ = result.user;
        console.log(result.user);
        this.firebase.writeUserData(result.user);
        // ...
        return this.user$
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }

  gSignout(){
    signOut(this.auth).then(() => {
      console.log("logout");
      this.user$ = null;

      // Sign-out successful.
    }).catch((error) => {
      console.log(error);

      // An error happened.
    });
    
  }


}
