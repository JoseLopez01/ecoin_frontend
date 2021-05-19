import { Component, Input, OnInit } from '@angular/core';
import { Course } from '@core/models/class.model';

enum TABS {
  homeworks = 'homeworks',
  schedule = 'schedule',
  students = 'students',
  ecoins = 'ecoins'
};

@Component({
  selector: 'app-class-view-info',
  templateUrl: './class-view-info.component.html',
  styleUrls: ['./class-view-info.component.scss']
})
export class ClassViewInfoComponent implements OnInit {

  selectedTab = TABS.schedule;
  tabs = TABS;

  constructor() { }

  ngOnInit(): void {
  }

}
