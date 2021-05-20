import { Component, OnInit } from '@angular/core';
import { Activity } from '@core/models/activity.model';
import { ActivityState } from '@core/store/activity/activity.state';
import { Select } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homework-grid',
  templateUrl: './homework-grid.component.html',
  styleUrls: ['./homework-grid.component.scss']
})
export class HomeworkGridComponent implements OnInit {

  @Select(ActivityState.getActivities) activities$!: Observable<Activity[]>;

  gridOptions!: GridOptions;

  constructor() { }

  ngOnInit(): void {
    this.createGrid();
  }

  private createGrid(): void {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Title',
          field: 'name'
        },
        {
          headerName: 'Since',
          field: 'since'
        },
        {
          headerName: 'Until',
          field: 'until'
        },
        {
          headerName: 'Is Active',
          field: 'isactive'
        }
      ],
      onGridReady: (params): void => {
        params.api.sizeColumnsToFit();
      }
    };
  }

}
