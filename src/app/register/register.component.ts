import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.form = this.formBuilder.group({
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
    });
  }
}
