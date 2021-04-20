import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-class-view-grid',
  templateUrl: './class-view-grid.component.html',
  styleUrls: ['./class-view-grid.component.scss']
})
export class ClassViewGridComponent implements OnInit {

  gridOptions!: GridOptions;

  constructor() { }

  ngOnInit(): void {
    this.createGrid();
  }

  private createGrid(): void {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Class Name',
          minWidth: 150
        },
        {
          headerName: 'Schedule',
          minWidth: 200
        },
        {
          headerName: '# Students',
          minWidth: 10
        },
        {
          headerName: 'Is Active',
          minWidth: 10
        }
      ],
      onGridReady: (params): void => {
        params.api.sizeColumnsToFit();
      },
      rowData: []
    };
  }

}
