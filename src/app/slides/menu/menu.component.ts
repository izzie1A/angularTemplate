import { CollectionViewer, DataSource, SelectionChange } from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { child, get, limitToLast, onValue, orderByChild, orderByKey, query, ref } from 'firebase/database';
import { BehaviorSubject, map, merge, Observable } from 'rxjs';
import { FirebaseRtdbService } from 'src/app/services/firebase-rtdb.service';
import { FirebaseCloudstoreService } from 'src/app/services/firebase-cloudstore.service';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';






export interface Task {
  id?: string;
  title: string;
  description: string;
}
@Component({
  selector: 'menu.component',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  
  constructor() {
  }


}
