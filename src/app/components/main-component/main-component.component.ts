import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadForm } from '../../interface/uploadForm.model'
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { FirebaseCloudstoreService } from 'src/app/services/firebase-cloudstore.service';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};
interface uploadPackage {
  uid: string,
  name: string,
  content: any| undefined;
}


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Output() outputFunction: ((args: any) => void) | undefined;
  @Output() x: any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  package: uploadPackage;
  content: any = [];

  constructor(private _formBuilder: FormBuilder, private store: FirebaseCloudstoreService, private firebaseStorageService: FirebaseStorageService) {
    this.package = {
      uid: "null",
      name: "null",
      content: []
    };
  }


  ngOnInit(): void {
  }
  
  onKey(dir: number, event: any, type: string) {
    this.content[dir][2] = event.target.files[0];
    console.log(this.content[dir][1]);
    if (event.target.value!!) {
      if (type == 'contentName') {
        this.content[dir][0] = event.target.value;
      } else if (type == 'contentContent' && this.content[dir][0] == 'image') {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.content[dir][1] = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    }
    console.log('watch');
    console.log(this.content);
    console.log(this.content[dir][2]);
  }



  packageSet(dir: string, input: any) {
    switch (dir) {
      case "uid":
        this.package.uid = input;
        break;
      case "name":
        this.package.name = input;
        break;
      case "content":
        this.package.content = input;
        break;
      default:
        // 
        break;
    }
  }
  packagePop() {
  }
  packageContentPush() {
    console.log(this.content);
    this.content.push([,]);
    console.log(this.content);
  }
  packageContentSet(dir: number, input: any) {
    this.content[dir] = input;
    console.log(this.content);
  }

  packageContentRemove(input: number) {
    if (input > -1) {
      this.content.splice(input, 1);
    }
  }

  packageContentEdit(dir: number, input: any) {
    this.content[dir] = input;
  }

  async uploadStepper(input: any) {
    console.log('start upload');
    for (let x of this.content) {
      if (x[0] == 'image') {
        await this.firebaseStorageService.uploadFile2('root/user/public/item/', x[2]);
        console.log('upload imgae')
        // let returnUrl = await this.firebaseStorageService.uploadFile2('root/user/public/item/', x[2])
      }
    }
    this.package.content = this.content;
    // console.log(returnUrl2)
    console.log(this.package);
    await this.store.addFile('root/user/public/item/t', 'this.package');
    console.log('stepper upload end');
  }

  async uploadTest(input?: any) {
    console.log('start testing');
    for (let x of this.content) {
      if (x[0] == 'image') {
        console.log(x[2])
        let returnUrl = this.firebaseStorageService.uploadFile2('root/user/public/item/', x[2]);
        console.log(returnUrl)
        console.log(x[2].name)
        await this.store.addFile('root/user/public/item/t', 
        {
          name : x[2].name,
          url : returnUrl,
        });
        console.log('upload imgae')
        // let returnUrl = await this.firebaseStorageService.uploadFile2('root/user/public/item/', x[2])
      }
      this.package.content = null;
      await this.store.addFile('root/user/public/item/t', this.package);
    }
    console.log();
  }

  myCallbackFunction = (args: any): void => {
    //callback code here
  }
}
 