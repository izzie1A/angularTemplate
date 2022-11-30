import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  signin(){
    this.authGuard.gSignin();
  }
  signout(){
    console.log("signout")
    this.authGuard.gSignout();
  }

}
