import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Semester, UserType } from '@core/models/user.model';
import { Observable } from 'rxjs';
import { confirmPassword } from 'app/shared/helpers/custom-validators';
import { Select, Store } from '@ngxs/store';
import { GetSemester, GetUserTypes, Register } from '@core/store/auth/auth.actions';
import { AuthState } from '@core/store/auth/auth.state';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  @Select(AuthState.semesters) semesters$!: Observable<Semester[]>;
  @Select(AuthState.userTypes) userTypes$!: Observable<UserType[]>;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getSemesters();
    this.getUserTypes();
  }

  onRegister(): void {
    this.store.dispatch(new Register(this.form.value));
  }

  private createForm(): void {
    this.form = this.formBuilder.group(
      {
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        password: [null, Validators.required],
        usertypeid: [null, Validators.required],
        confirmpassword: [null, Validators.required],
        phonenumber: [null, Validators.required],
        semesterid: null,
        email: [
          null,
          Validators.compose([Validators.required, Validators.email]),
        ],
      },
      {
        validators: confirmPassword,
      }
    );
  }

  private getSemesters(): void {
    this.store.dispatch(new GetSemester());
  }

  private getUserTypes(): void {
    this.store.dispatch(new GetUserTypes());
  }
}
