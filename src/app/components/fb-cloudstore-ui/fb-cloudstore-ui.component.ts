import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseCloudService } from 'src/app/services/firebase-cloud.service';


export interface Item { 
  uid: string,
  name?: string;
  title?: string;
  timeStamp?: string;
  content?:any;
}

@Component({
  selector: 'app-fb-cloudstore-ui',
  templateUrl: './fb-cloudstore-ui.component.html',
  styleUrls: ['./fb-cloudstore-ui.component.css']
})
export class FbCloudstoreUiComponent {
  curCollection?: Observable<any[]>;
  collectionDir?: any;
  docSelector?: any;
  fileHolder: Item;

  constructor(public firecloudService: FirebaseCloudService) {
    this.collectionDir = 'root';
    this.selectCollection(this.collectionDir);
    this.fileHolder = {uid:'',};
  }

  selectCollection(input: any) {
    console.log(input)
    this.getCollection(input).subscribe(res => console.log(res));
    this.curCollection = this.getCollection(input);
  }
  selectDocuemnt(input: any) {
    this.docSelector = this.firecloudService.getDoc(input).ref;
    this.fileHolder = this.docSelector;
  }
  getCollection(input?: any) {
    if(input!!){
      this.collectionDir=input;
    };
    return this.firecloudService.getCollection(input);
  }
  saveDoc(input?: any) {
    if (input != undefined) {
      this.firecloudService.writeDoc(this.collectionDir, input);
    } else {
      this.firecloudService.addDoc(this.collectionDir, {
        uid: 'undefined',
        name: 'undefind',
        title: 'undefind',
        content: 'undefind',
      });
    }
  }
  editFile(inputKey:string, inputValue:any){
    if(this.fileHolder){
      this.fileHolder = Object.create(this.fileHolder)
    }
  }
  writeDoc(dir:string, inputFile?:Item) {
    if (this.fileHolder != null) {
      let result = this.firecloudService.writeDoc(dir,this.fileHolder);
      console.log(result);
    } else {
      this.firecloudService.addDoc(this.collectionDir, {
        uid: 'undefind',
        name: 'undefind',
        title: 'undefind',
        content: 'undefind',
      });
    }
  }
  deleteDoc(dir: string, itemId: string) {
    this.firecloudService.delete(dir,itemId);
    console.log(dir)
  }

  test(dir?:any){
    console.log(dir)
  }

  editFileHolder(selector:string, input:any){
    switch(selector){
      case('uid'):{
        this.fileHolder!! ? this.fileHolder.uid = input : console.log('no')
        console.log(this.fileHolder);
        return
      }
      case('name'):{
        this.fileHolder!! ? this.fileHolder.name = input : console.log('no')
        console.log(this.fileHolder);
        return
      }
      case('title'):{
        console.log(input);
        return
      }
      case('content'):{
        console.log(input);
        return
      }
    }
    // this.fileHolder = {
    //     uid: 'title',
    //     name: 'undefind',
    //     title: 'undefind',
    //     content: 'undefind',
    //   };

  }



}
