import { Component, OnInit } from '@angular/core';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageArray:any;
  imageSrc:any;
  imageIndex=3;
  imageMaxIndex=3;
  watchh:any
  constructor(private fbrtdbService: FirebaseRtdbService) { 
    this.watch();
  }

  ngOnInit(): void {
    this.switchSlide(this.imageMaxIndex);
  }

  
  switchSlide(ipnutInt:number): void{
    if(ipnutInt==0){
      this.imageIndex=this.imageMaxIndex;
    }
    else if(ipnutInt>this.imageMaxIndex){
      this.imageIndex=1;
    }
    else{
      this.imageIndex=ipnutInt;
    }
    // this.imageSrc="assets/img/"+this.imageIndex+".jpg";
    this.imageSrc="https://picsum.photos/id/"+ipnutInt+"/320/200";
  }

  async watch(){
    let x = {header:false , type:'header1' }
    this.fbrtdbService.set('root/page/homepageHeader',x);
    this.watchh = await this.fbrtdbService.readChildList('root/page');
    console.log(this.watchh)
  }
}
