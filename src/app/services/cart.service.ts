import { Injectable } from '@angular/core';
import { FirebaseCloudstoreService } from 'src/app/services/firebase-cloudstore.service';
import { AuthGuard } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = []
  clientId:any;
  constructor(public auth: AuthGuard, private fcloud: FirebaseCloudstoreService) {
    this.clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid.toString();
  }

  addToCart(input: any) {
    this.clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid.toString();
    console.log(this.clientId);
    let dir = '/users/'+this.clientId+'/cart';
    this.fcloud.add(dir,{item: 'xxx'});
  }


  getCart(dir: string, input: any) {
    this.clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid.toString();
    let cartDir = '/users/'+this.clientId+'/cart';
    console.log(cartDir);
    return this.fcloud.read(cartDir,'');
  }

  deleteCart(item:string){
    this.clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid.toString();
    let cartDir = '/users/'+this.clientId+'/cart/';
    this.fcloud.delete(cartDir, item);
  }

  checkOut(dir: string, name: string, input: any){
    this.fcloud.write(dir,name,input);
  }
}
