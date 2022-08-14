import { Component, OnInit } from '@angular/core';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.css']
})
export class TaskGridComponent implements OnInit {
  watchh:any
  constructor(private fbrtdbService: FirebaseRtdbService) {
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
