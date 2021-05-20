import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/user.model';
import { StudentState } from '@core/store/student/student.state';
import { Select } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-view-grid',
  templateUrl: './student-view-grid.component.html',
  styleUrls: ['./student-view-grid.component.scss']
})
export class StudentViewGridComponent implements OnInit {

  @Select(StudentState.getStudents) students$!: Observable<User[]>;

  gridOptions!: GridOptions;

  constructor() { }

  ngOnInit(): void {
    this.createGrid();
  }

  private createGrid(): void {
    this.gridOptions = {
      columnDefs: [
        {
          headerName: 'Full Name',
          field: 'fullname'
        },
        {
          headerName: 'Semester',
          field: 'semester.description',
          width: 100
        },
        {
          headerName: 'Email',
          field: 'email'
        },
        {
          headerName: 'Phone',
          field: 'phonenumber'
        }
      ],
      onGridReady: (params): void => {
        params.api.sizeColumnsToFit();
      },
    };
  }

}
