import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  onLogin(): void {
    this.authService.login(this.form.value).subscribe({
      next: (value) => {
        localStorage.setItem('token', value.data.accesstoken);
        this.router.navigate(['/home']);
      },
      error: (err) => console.log(err),
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }
}
