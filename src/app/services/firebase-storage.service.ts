import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import {FirebaseCloudstoreService} from 'src/app/services/firebase-cloudstore.service';
=======
import { deleteObject, getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { FirebaseCloudstoreService } from "src/app/services/firebase-cloudstore.service";
>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  storage: any;
  childArray: any;
<<<<<<< HEAD
  constructor(fcloud:FirebaseCloudstoreService) {
=======
  constructor(private fcloud: FirebaseCloudstoreService) {

>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
  };


  getRef(dir: string) {
    this.storage = getStorage();
    const mountainsRef = ref(this.storage, dir);
    return mountainsRef;
  }
  async readRoot(input: string) {
    const storage = getStorage();
    const rootRef = ref(storage, 'root/user/test/image/');
    let output: any[] = new Array();
    // Find all the prefixes and items.
    await listAll(rootRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log(folderRef.fullPath);
        });
        res.items.forEach(async (itemRef) => {
          output.push([itemRef.name]);
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    console.log(this.childArray);
    return output
  }

<<<<<<< HEAD
  async uploadFile(refDir: string, input: any) {
    let uploadTask = uploadBytesResumable(this.getRef(refDir), input);
    await uploadTask.on('state_changed', (snapshot) => {
=======
  async uploadFile(refDir: any, input: any) {
    alert(refDir)
    let uploadTask = uploadBytesResumable(this.getRef(refDir+input.name), input);
    return await uploadTask.on('state_changed', (snapshot) => {
>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(snapshot.bytesTransferred + '/ ' + snapshot.totalBytes + 'Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
<<<<<<< HEAD
    },
      (error) => {
        alert(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
=======
    }, (error) => {
      alert(error.message);
    }, () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        alert(refDir + downloadURL);
        console.log(uploadTask.snapshot.ref);
        console.log(input.name);
        return this.updateCloudstore(refDir+input.name, {
          url: downloadURL,
          name: input.name
>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
        });
      });
      }
    );
  }

<<<<<<< HEAD
  async readFile(refDir: string) {
=======
  async updateCloudstore(refDir: string, input: any) {
    console.log('target '+refDir+' already exists')
    console.log(input)
    console.log('input '+input+' already exists')
    return await this.fcloud.write2(refDir, input);
  }

  async readFile(refDir: any) {
>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
    let output = '';
    await getDownloadURL(this.getRef(refDir))
      .then((url) => {
        output = url;
      })
      .catch((error) => {
        // Handle any errors
      });
    console.log(output)
    return output
  }

<<<<<<< HEAD
  async readFileMetadata(refDir: string) {
=======
  async readFileMetadata(refDir: any) {
>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
    let output: any;
    await getMetadata(this.getRef(refDir))
      .then((metadata) => {
        output = metadata;
        // Metadata now contains the metadata for 'images/forest.jpg'
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    console.log(output)
    return output
  }

<<<<<<< HEAD
  uploadObject(refDir: string, input: any) {
    this.uploadFile(refDir, input);
    this.fcloud.write(refDir, refDir, input)
=======

  async delete(refDir: any) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, refDir);

    // Delete the file
    return await deleteObject(desertRef).then((output) => {
      return output
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
      alert(error)
    });

>>>>>>> 5998953831dbbf7ae307b9ddb582b630b7a6c07c
  }
}

