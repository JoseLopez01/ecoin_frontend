import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '@core/models/class.model';
import { ClassService } from '@core/services/class/class.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-class-view-grid',
  templateUrl: './class-view-grid.component.html',
  styleUrls: ['./class-view-grid.component.scss']
})
export class ClassViewGridComponent implements OnInit {

  @Output() selectedClassId: EventEmitter<number> = new EventEmitter<number>();

  gridOptions!: GridOptions;
  classes: Course[] = [];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.createGrid();
    this.getClasses();
  }

  private createGrid(): void {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Class Name',
          minWidth: 150,
          field: 'name'
        },
        {
          headerName: '# Students',
          minWidth: 10,
          field: 'users'
        },
        {
          headerName: 'Is Active',
          minWidth: 10,
          field: 'isactive'
        }
      ],
      onGridReady: (params): void => {
        params.api.sizeColumnsToFit();
      },
      onRowDoubleClicked: (params): void => {
        console.log(params.data);
        this.selectedClassId.emit(params.data.courseid);
      },
      rowData: []
    };
  }

  private getClasses(): void {
    this.classService.getTeacherClasses().subscribe({
      next: response => {
        this.classes = response.data;
      }
    });
  }

}
