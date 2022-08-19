import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

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

  ngOnInit(): void {
  }

  async readRoot(input:string){
    const storage = getStorage();
    const rootRef = ref(storage, 'root/user/test/image/');
    // Find all the prefixes and items.
    await listAll(rootRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log(folderRef.fullPath);
        });
        res.items.forEach(async (itemRef) => {
          this.childArray.push([itemRef.name]);
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
      console.log(this.childArray);
  }

  async read(input:string) {
    const storage = getStorage();
    const starsRef = ref(storage, 'root/user/test/image/'+input);
    let output = '';
     await getDownloadURL(starsRef)
    .then((url) => {
      output = url;
    })
    .catch((error) => {
      // Handle any errors
    });
    console.log(output)
    return output
  }

  async select(input:any){
    let x = await this.read(input);
    const img = document.getElementById('input');
    img!.setAttribute('src', x);
    // let x = document.getElementById("fbImageContainer")
    // x!.innerHTML = "<p>a</p>";
    // await console.log(await this.read(input));
  }

  async upload(file?: any) {
    let fileDirName = file.target.files[0].name;
    const storage = getStorage();
    const storageRef = await ref(storage, 'root/user/test/image/' + fileDirName);


    // const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    await uploadBytes(storageRef, file.target.files[0]).then((snapshot) => {
      console.log('Uploaded an array!');
      console.log(snapshot);
      this.read(fileDirName);
    });
    await getMetadata(storageRef)
      .then((metadata) => {
        console.log(metadata);
      })
      .catch((error) => {
      });
  }

 }
