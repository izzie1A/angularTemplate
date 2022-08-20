import { Component, OnInit , Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UploadForm} from '../../interface/uploadForm.model'

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

  constructor(private _formBuilder: FormBuilder) {
  }

  heroes = [''];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  setHero(dir:any,newHero: string) {
    if (newHero.length!=0) {
      this.heroes[dir] = newHero;
    }
  }

  ngOnInit(): void {
  }
  packagePush(input:any){
    this.package.push(input);
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
    console.log(input);
    if (input > -1) {
      this.content.splice(input, 1);
    }
    console.log(this.content[input]);
    console.log(this.content);
  }
  packagePushContent(input:any){
    this.package.push(input);
  }
  packagePop(){

  }
  uploadStepper(){
    alert(this.package)
  }

  myCallbackFunction = (args: any): void => {
    //callback code here
    }
}
