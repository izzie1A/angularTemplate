import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-task-flex',
  templateUrl: './task-flex.component.html',
  styleUrls: ['./task-flex.component.css']
})
export class TaskFlexComponent implements OnInit {
  watchh:any
  constructor(private fbrtdbService: FirebaseRtdbService, private store: AngularFirestore) {
    this.watch();
   }

  ngOnInit(): void {
  }

  async watch(){
    let x = {header:false , type:'header1' }
    this.fbrtdbService.set('root/page/homepageHeader',x);
    this.watchh = await this.fbrtdbService.readChildList('root/page');
    console.log(this.watchh)
  }
}
