import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  course_id: string;
  course_name: string;
  usage: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { course_id: 'BSB50420', course_name: 'IT' , usage: 'Superseded'},
  { course_id: 'BSB51918', course_name: 'CSE', usage: 'Current' },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppComponent {
  displayedColumns: string[] = ['CODE', 'NAME','USAGE RECOMMENDATION','actions'];
  dataSource = ELEMENT_DATA;
  expandedElement: PeriodicElement | null;
}
