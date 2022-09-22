import { Component, OnInit , Output} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {FormBuilder, Validators} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import {UploadForm} from '../../interface/uploadForm.model'
import { FirebaseCloudstoreService } from '../../services/firebase-cloudstore.service';


const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};



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
  content:any = ['',];
  t:any = 'none';
  oo:any;

  constructor(private _formBuilder: FormBuilder, private store: FirebaseCloudstoreService) {
  }


  ngOnInit(): void {
  }
  packagePush(input:any){
    this.package.push(input);
  }
  packageSet(dir:number, input:any){
    this.package.push(input);
  }
  packagePop(){
  }
  packageContentPush(){
    console.log(this.content);
    this.content.push('nullInput');
    console.log(this.content);
  }
  packageContentSet(dir:number, input:any){
    this.content[dir] = input;
    console.log(this.content);
  }

  
  packageContentRemove(input:number){
    if (input > -1) {
      this.content.splice(input, 1);
    }
  }

  packageContentEdit(input:number){
  }

  packagePushContent(input:any){
    this.package.push(input);
  }
  
  uploadStepper(input:any){
    // alert(this.package);
    // this.store.collection('TestList').add(this.package);
    this.store.write('/uploadStorage','testname', input);
  }

  myCallbackFunction = (args: any): void => {
    //callback code here
  }
}
  