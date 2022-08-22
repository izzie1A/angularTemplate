import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { Observable } from 'rxjs';

export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file!: File;
  constructor(file: File) {
    this.file = file;
  }
}


@Component({
  selector: 'app-fb-storage-ui',
  templateUrl: './fb-storage-ui.component.html',
  styleUrls: ['./fb-storage-ui.component.css']
})
export class FbStorageUiComponent implements OnInit {

  picFile: any
  selectedFile: any;
  childArray: any;

  percentage?: Observable<number>;
  snapshot?: Observable<any>;
  downloadURL?: string;
  fileMetadata?: any; 


  constructor(private firebaseStorageService: FirebaseStorageService) {
    this.readRoot('');  
    this.childArray = [];
    this.selectedFile = '';
  }
  // Variable to store shortLink from api response
  shortLink: string = "";
  view: string = "";
  loading: boolean = false; // Flag variable
  file: File | undefined; // Variable to store file
  fileHolder: File | undefined; // Variable to store file

  ngOnInit(): void {
    
  }

  async upload(input:any){
    this.loading = true;
    await this.firebaseStorageService.uploadFile('root/user/test/image/'+this.file,this.fileHolder);
    this.loading = false;
    
  }
  selectUploadFile(input:any){
    this.select(input.target.files[0].name);
    this.fileHolder=input.target.files[0];
  }





  async readRoot(input:string){
    const storage = getStorage();
    const rootRef = ref(storage, 'root/user/test/image/');
    // Find all the prefixes and items.
    this.childArray = await this.firebaseStorageService.readRoot(input);
    // await listAll(rootRef)
    //   .then((res) => {
    //     res.prefixes.forEach((folderRef) => {
    //       console.log(folderRef.fullPath);
    //     });
    //     res.items.forEach(async (itemRef) => {
    //       this.childArray.push([itemRef.name]);
    //     });
    //   }).catch((error) => {
    //     // Uh-oh, an error occurred!
    //   });
      console.log(this.childArray);
  }

  async select(input:any){
    console.log(input);
    let x = await this.firebaseStorageService.readFile('root/user/test/image/'+input);
    const img = document.getElementById('input');
    img!.setAttribute('src', x);
    let y = await this.firebaseStorageService.readFileMetadata('root/user/test/image/'+input);
    this.fileMetadata=y;
    let map = new Map([[2, 'foo'], [1, 'bar']]);
  }

 }
