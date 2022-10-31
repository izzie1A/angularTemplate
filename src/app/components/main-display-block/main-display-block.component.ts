import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-display-block',
  templateUrl: './main-display-block.component.html',
  styleUrls: ['./main-display-block.component.css']
})
export class MainDisplayBlockComponent implements OnInit {
  content: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onKey(dir: number, event: any, type: string) {
    this.content[dir][2] = event.target.files[0];
    console.log(this.content[dir][1]);
    if (event.target.value!!) {
      if (type == 'contentName') {
        this.content[dir][0] = event.target.value;
      } else if (type == 'contentContent' && this.content[dir][0] == 'image') {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.content[dir][1] = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    }
  }

  packageContentRemove(input: number) {
    if (input > -1) {
      this.content.splice(input, 1);
    }
  }

  packageContentPush() {
    console.log(this.content);
    this.content.push([,]);
    console.log(this.content);
  }
}
