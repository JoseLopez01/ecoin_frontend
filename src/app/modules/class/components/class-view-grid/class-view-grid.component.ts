import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Course } from '@core/models/class.model';
import { GetCourseById, GetCourses } from '@core/store/course/course.actions';
import { CourseState } from '@core/store/course/course.state';
import { Select, Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-class-view-grid',
  templateUrl: './class-view-grid.component.html',
  styleUrls: ['./class-view-grid.component.scss']
})
export class ClassViewGridComponent implements OnInit {

  @Select(CourseState.courses) courses$!: Observable<Course[]>;

  gridOptions!: GridOptions;

  constructor(private store: Store) { }

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
        const { courseid } = params.data;
        this.store.dispatch(new GetCourseById(courseid));
      },
      rowData: []
    };
  }

  private getClasses(): void {
    this.store.dispatch(new GetCourses());
  }

}
