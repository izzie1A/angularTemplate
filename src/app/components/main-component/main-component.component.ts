import { Component, OnInit , Output} from '@angular/core';
import { AuthGuard } from 'src/app/services/auth.service';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Output() outputFunction: ((args: any) => void) | undefined;
  @Output() x:any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  package:any = [];
  content:any = [];
  t:any = 'none';

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  packagePush(input:any){
    this.package.push(input);
  }
  packageContentPush(input:any){
    this.content.push(input);
  }
  packagePushContent(input:any){
    this.package.push(input);
  }
  packagePop(){

  }

  myCallbackFunction = (args: any): void => {
    //callback code here
    }
}
