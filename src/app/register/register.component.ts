import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Semester, UserType } from '@core/models/user.model';
import { Response } from '@core/models/response.model';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/user/user.service';
import { NextObserver } from 'rxjs';
import { confirmPassword } from 'app/shared/helpers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userTypes: UserType[] = [];
  semesters: Semester[] = [];
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getSemesters();
    this.getUserTypes();
  }

  onRegister(): void {
    this.authService.register(this.form.value).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
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
    const observer: NextObserver<Response> = {
      next: (value) => {
        this.semesters = value.data;
      },
    };
    this.userService.getSemesters().subscribe(observer);
  }

  private getUserTypes(): void {
    const observer: NextObserver<Response> = {
      next: (value) => {
        this.userTypes = value.data;
      },
    };
    this.userService.getUserTypes().subscribe(observer);
  }
}
