import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';
import { Task } from '../../interface/task.model';

const getObservable = (collection: AngularFirestoreCollection<Task>) => {
  const subject = new BehaviorSubject<Task[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: Task[]) => {
    subject.next(val);
  });
  return subject;
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageArray:any;
  imageSrc:any;
  imageIndex=3;
  imageMaxIndex=3;
  watchh:any
  todo = getObservable(this.store.collection('todo')) as Observable<Task[]>;
  constructor(private fbrtdbService: FirebaseRtdbService, private store: AngularFirestore) { 
  }

  ngOnInit(): void {
    this.switchSlide(this.imageMaxIndex);
  }

  
  switchSlide(ipnutInt:number): void{
    if(ipnutInt==0){
      this.imageIndex=this.imageMaxIndex;
    }
    else if(ipnutInt>this.imageMaxIndex){
      this.imageIndex=1;
    }
    else{
      this.imageIndex=ipnutInt;
    }
    // this.imageSrc="assets/img/"+this.imageIndex+".jpg";
    this.imageSrc="https://picsum.photos/id/"+ipnutInt+"/320/200";
  }

}


