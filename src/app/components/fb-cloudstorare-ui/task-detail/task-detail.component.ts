import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(private cartS : CartService) {
   }

  ngOnInit(): void {
  }

  addToCart(input:any){
    this.cartS.addToCart(input);
   }

}
