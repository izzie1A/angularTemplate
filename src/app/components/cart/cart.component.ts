import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from '../../services/cart.service';
import { FirebaseCloudstoreService } from '../../services/firebase-cloudstore.service';
import { AuthGuard } from '../../services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  cartHolder:any
  items: Observable<any[]>;
  constructor(public auth: AuthGuard, private cart:CartService, private store: FirebaseCloudstoreService) {
    this.cartHolder = this.cart.cart;
    this.items = this.cart.getCart('users/','');
   }

  ngOnInit(): void {
    this.items = this.cart.getCart('users/','');
  }

  test(){
    this.cart.addToCart('tesfaff');
  }

  delete(item:any){
    this.cart.deleteCart(item);
  }

}

