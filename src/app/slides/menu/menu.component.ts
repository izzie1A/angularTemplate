import {Component, Injectable} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';


interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'menu.component',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  foods: Food[] = [
    {value: 'rtdb-0', viewValue: 'realtime Database'},
    {value: 'pizza-1', viewValue: 'firebase cloudtore'},
  ];
  constructor(private dialog: MatDialog, private store: AngularFirestore) {
  }



}

