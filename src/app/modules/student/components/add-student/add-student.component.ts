import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@core/models/user.model';
import { SearchStudents } from '@core/store/student/student.actions';
import { StudentState } from '@core/store/student/student.state';
import { Select, Store } from '@ngxs/store';
import { GridOptions } from 'ag-grid-community';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Select(StudentState.getSearchedStudents) students$!: Observable<User[]>;

  gridOptions!: GridOptions;
  form!: FormGroup;

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createGrid();
    this.onSearchChanges();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      filter: [null, Validators.required]
    });
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
      onRowDataChanged: (params): void => {
        params.api.sizeColumnsToFit();
      }
    };
  }

  private onSearchChanges(): void {
    this.subscriptions.push(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.form.get('filter')!.valueChanges.subscribe({
        next: _search => {
          this.store.dispatch(new SearchStudents(_search));
        }
      })
    );
  }

}
