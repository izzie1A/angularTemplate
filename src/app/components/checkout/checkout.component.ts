import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FirebaseCloudstoreService } from '../../services/firebase-cloudstore.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private store: FirebaseCloudstoreService) {
   }

  ngOnInit(): void {
  }

  checkoutSummitOrder(dir:string, input:any){
    alert(input);
    this.store.write(dir,input);
  }

}
