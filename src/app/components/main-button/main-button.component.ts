import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
  @Input() outputFunction?: ((args: any) => void);
  input:string

  constructor() {
    this.input = 'null';
   }

  ngOnInit(): void {
  }

  btnClick(input?:any){
    if(input!!) this.input =input;
    if(this.outputFunction) this.outputFunction(input);
  }
}
