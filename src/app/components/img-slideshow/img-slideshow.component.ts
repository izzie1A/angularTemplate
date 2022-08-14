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
