import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { deleteObject, getDownloadURL, getMetadata, getStorage, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  storage: any;
  childArray: any;
  constructor() {

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

  async uploadFile(refDir: any, input: any) {
    let uploadTask = uploadBytesResumable(this.getRef(refDir), input);
    let x;
    await uploadTask.on('state_changed', (snapshot) => {
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
    },
      (error) => {
        alert(error.message);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        });
      }
    );
  }

  async readFile(refDir: any) {
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

  async readFileMetadata(refDir: any) {
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


  async delete(refDir: any) {
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, refDir);

    // Delete the file
    deleteObject(desertRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

  }
}

