import { Component, OnInit } from '@angular/core';
import { getMetadata, getStorage, ref, uploadBytes } from "firebase/storage";
import { getApp } from "firebase/app";

@Component({
  selector: 'app-fb-storage-ui',
  templateUrl: './fb-storage-ui.component.html',
  styleUrls: ['./fb-storage-ui.component.css']
})
export class FbStorageUiComponent implements OnInit {

  constructor() {
    const firebaseApp = getApp();
    const storage = getStorage();
    const storageRef = ref(storage);
   }
    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file: File | undefined ; // Variable to store file
     
  ngOnInit(): void {
  }
  async upload(file?:any){
    const storage = getStorage();
    const storageRef = ref(storage,'root/2');


    const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    await uploadBytes(storageRef, bytes).then((snapshot) => {
      console.log('Uploaded an array!');
      console.log(snapshot);
    });
    await getMetadata(storageRef)
    .then((metadata) => {
      console.log(metadata);
      // Metadata now contains the metadata for 'images/forest.jpg'
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
    });
  }            
  
  

}
