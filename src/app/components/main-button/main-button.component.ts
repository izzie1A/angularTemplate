import { Component, OnInit , Input} from '@angular/core';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
  @Input() outputFunction?: ((args: any) => void);
  input:any

  constructor(private firebase: FirebaseRtdbService) {
    this.input = 'null';
    this.watchBtnCount();
   }

  ngOnInit(): void {
  }

  async btnClick(input?:any){
    if(this.outputFunction) this.outputFunction(input);
    if(input==null){
      let x = {
        qnumber: this.input.qnumber++
      }
      await this.firebase.set('rbt',x);
    } 

  }

  async watchBtnCount(){
    this.input = await this.firebase.read('rbt');
  }

}
