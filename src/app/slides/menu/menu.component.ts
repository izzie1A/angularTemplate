import { CollectionViewer, DataSource, SelectionChange } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { child, get, limitToLast, onValue, orderByChild, orderByKey, query, ref } from 'firebase/database';
import { BehaviorSubject, map, merge, Observable } from 'rxjs';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';




export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
  ) {}
}







@Component({
  selector: 'menu.component',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  container:any[]
  containerChild:any[]
  containerChildDetail:any[]
  dir:any

  constructor(private fbrtdbService: FirebaseRtdbService) {
    this.container = [];
    this.containerChild = [];
    this.containerChildDetail = [];
    this.dir = '';
    
    this.getRoot()
  }



  getRoot(){
    console.log(this.dir)
    this.dir = 'root';
    console.log(this.dir)
    this.goNode(this.dir);
  }


  getNode(dir:string){
    this.dir+= '/'+dir
    const root = ref(this.fbrtdbService.db, this.dir);
    this.container = [];
    this.containerChild = [];
    return onValue(root, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        this.container.push(childKey);
        this.containerChild.push(childData);
      });
      console.log(this.container);
      console.log(this.containerChild);
      return this.container;
    }, {
      onlyOnce: true
    });

  }

  goNode(dir:string){
    this.dir = ''
    this.getNode(dir);
  }

  NavNode(direction:number){
    console.log(this.dir);
    var splitted = this.dir.split("/"); 

    if(splitted.length>0){splitted.splice(splitted.indexOf(splitted[splitted.length+direction]), 1);}
    console.log(splitted);
    let newDir = ''
    for (let data of splitted) {
      if(data!=""){
        newDir+=data+'/';
      }
    }
    console.log(newDir);
    this.dir = newDir.slice(0,newDir.length-1);
    console.log(this.dir); 
    this.goNode(this.dir);

  }

  peekChild(input:string){
    console.log(input);
    console.log(this.dir);
    this.containerChildDetail = [];

    const root = ref(this.fbrtdbService.db, this.dir+'/'+input);
    return onValue(root, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        this.containerChildDetail.push(childKey);
      });
      console.log(this.containerChildDetail);
    }, {
      onlyOnce: true
    });




  }



}
