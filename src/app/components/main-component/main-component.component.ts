import { Component, OnInit , Output} from '@angular/core';
import { AuthGuard } from 'src/app/services/auth.service';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Output() outputFunction: ((args: any) => void) | undefined;
  @Output() x:any;

  constructor(private dbrtdbService:FirebaseRtdbService) {
  }

  ngOnInit(): void {
  }

  myCallbackFunction = (args: any): void => {
    //callback code here
    }
}
