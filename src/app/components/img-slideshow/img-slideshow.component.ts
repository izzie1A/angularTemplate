import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slideshow',
  templateUrl: './img-slideshow.component.html',
  styleUrls: ['./img-slideshow.component.css']
})
export class ImgSlideshowComponent implements OnInit {
  imageArray:any;
  imageSrc:any;
  imageIndex=3;
  imageMaxIndex=3;
  constructor() { }

  ngOnInit(): void {
    this.switchSlide(this.imageMaxIndex);
    this.imageSrc = 'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/56203729_850936525256815_7595995863109861376_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=LZeZuy-1pqIAX9U2fr7&_nc_ht=scontent-lhr8-1.xx&oh=00_AT8Y52nPyJg97bRaUoi1aNflqngNW61xU3CO-V5uWSuG-A&oe=63247F42';
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

}
