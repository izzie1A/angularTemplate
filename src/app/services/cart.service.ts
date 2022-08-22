import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any=[]
  constructor() {
    
  }

   addToCart(input:any){
    if(this.cart!!){
      this.cart.push(input);
    }else if(this.cart!){
      this.cart[0] = input;
    }
    alert(this.cart)
   }
}
