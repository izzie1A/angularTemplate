import { Component, OnInit ,Output} from '@angular/core';
import { FirebaseCloudService } from 'src/app/services/firebase-cloud.service';
import { AuthGuard } from 'src/app/services/auth.service';
import { getDatabase, ref,onValue, onChildChanged, onChildAdded, onChildRemoved, query, limitToLast, orderByChild, } from "firebase/database";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  @Output() outputFunction: ((args: any) => void) | undefined;
  msgBoxInput?: string ='';
  chatArray: any[] ;
  userArray: any[] ;
  clientId?: string;
  selected = '';
  selected2 = '';

  chatRoomSelector: string;


  constructor( private auth: AuthGuard, private firestore: FirebaseCloudService) {
    // listener to user id == chat record userID
    this.clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid;
    this.chatArray = new Array();
    this.userArray = new Array();
    this.chatRoomSelector = 'undefined';
    
    this.getChatRecord(" ");
    // // smarter 
    // this.getChatRecord();
    // // 

    // // get to everyUser
    // this.getAllUser();
    // // 

  }

  // myCallbackFunction = (args: any): void => {
  //   //callback code here
  //   console.log(this.getChatRecord());
  //   this.getAllUser();

  // }


  // getAllUser(){
  //   const everyUser = ref(this.fbrtdbService.db, 'root/userId');
  //   this.userArray = [];
  //   onValue(everyUser, (data) => {
  //       console.log(data.val());
  //       data.forEach((childSnapshot) => {
  //         console.log(childSnapshot.val())
  //         this.userArray.push(childSnapshot.val());
  //       });
  //   });
  // }

  // getChatRecord(){
  //   const chatdbRef = ref(this.fbrtdbService.db, '/root/chat/'+this.clientId);
  //   onValue(chatdbRef, (data) => {
  //     this.chatArray = [];
  //     data.forEach((childSnapshot) => {
  //       console.log('look')
  //       console.log(childSnapshot.val())
  //       this.chatArray.push(childSnapshot.val());
  //     });
      
  //   });
  // }

  // setMessage(key:any, value?:string){
  //   let time = new Date();

  //   const clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid;
  //   let msg = {
  //     fromUser: clientId,
  //     toUser: name,
  //     time: time.toString() ,
  //     messages :  value
  //   }
  //   console.log(this.fbrtdbService.writeData(+'root/chat/'+clientId+'/'+time,msg));

  // }


  // sendMessage(key:any, value?:string){
  //   let time = new Date();

  //   const clientId = this.auth.user$ == null? "null-ID" : this.auth.user$.uid;
  //   let msg = {
  //     fromUser: clientId,
  //     toUser: name,
  //     time: time.toString() ,
  //     messages :  value
  //   }
  //   console.log(this.fbrtdbService.pushData('root/chat/'+clientId+this.selected2+'/',msg));
  // }

  test(input: any){
    this.chatRoomSelector = input;
    this.getChatRecord(input);

  }

  getChatRecord(input:any){
    this.firestore.getCollection(input);
    console.log()
  }
  
  sendMessage(){

  }

}
