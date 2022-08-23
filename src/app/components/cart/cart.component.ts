import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartHolder:any
  constructor(private cart:CartService) {
    this.cartHolder = this.cart.cart;
   }

  ngOnInit(): void {
  }

}
