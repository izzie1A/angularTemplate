import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { FirebaseCloudstoreService } from 'src/app/services/firebase-cloudstore.service';
import { Observable } from 'rxjs';
import { AuthGuard } from '../../services/auth.service';
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

  // Variable to store shortLink from api response
  shortLink: string = "";
  view: string = "";
  loading: boolean = false; // Flag variable
  file: File | undefined; // Variable to store file
  fileHolder: File | undefined; // Variable to store file

  constructor(private auth: AuthGuard, private firebaseStorageService: FirebaseStorageService, private firebasecloudService: FirebaseCloudstoreService) {
    this.readRoot('');
    this.childArray = [];
    this.fileHolder = undefined;
  }


  ngOnInit(): void {

  }

  async upload(input: any) {
    this.loading = true;
    // await this.firebaseStorageService.uploadFile('root/user/'+this.auth.user$.uid.toString()+'/image/', this.fileHolder).then((snapshot) => {
      await this.firebaseStorageService.uploadFile('root/user/public/image/'+ this.fileHolder?.name, this.fileHolder).then((snapshot) => {
        console.log(snapshot);
        console.log(this.fileHolder);
      this.childArray = [];
      this.readRoot('');
    });
    this.loading = false;

  }
  async selectUploadFile(input: any) {
    this.fileHolder = input.target.files[0];
  }

  async select(input: any) {
    console.log(input);
    let x = await this.firebaseStorageService.readFile('root/user/public/image/' + input);
    const img = document.getElementById('input');
    img!.setAttribute('src', x);
    await this.firebaseStorageService.readFileMetadata('root/user/public/image/' + input).then((output) => {
        this.fileMetadata = output;
        console.log(this.fileMetadata)
        this.readRoot('');
      }
    )
  };

  async deleteFile(dir: any) {
    console.log(dir);
    console.log('root/user/test/image/' + dir);
    await this.firebaseStorageService.delete('root/user/public/image/' + dir).then(() => {
      this.childArray = [];
      this.readRoot('');
    });
  };

  async readRoot(input: string) {
    this.childArray = await this.firebaseStorageService.readRoot(input);
    console.log(this.childArray);
  };
}
