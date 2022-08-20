import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})
export class TaskGridComponent implements OnInit {
  watchh:any
  profilePic: any
  constructor(private fbrtdbService: FirebaseRtdbService) {
    this.watch();
    this.ngOnInit();
   }

  async ngOnInit() {
    this.profilePic = await this.read('55944989_850122328671568_426981811499827200_n.jpg');
    console.log(this.profilePic)

  }

  async watch(){
    let x = {header:false , type:'header1' }
    this.fbrtdbService.set('root/page/homepageHeader',x);
    this.watchh = await this.fbrtdbService.readChildList('root/page');
    console.log(this.watchh)
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
}
