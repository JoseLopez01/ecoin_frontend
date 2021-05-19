import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Semester, UserType } from '@core/models/user.model';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/user/user.service';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Register, Login, GetSemester, GetUserTypes } from './auth.actions';

export class AuthStateModel {
  public userTypes!: UserType[];
  public semesters!: Semester[];
  public logged!: boolean;
}

const defaults: AuthStateModel = {
  userTypes: [],
  semesters: [],
  logged: false
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  @Selector()
  static getLogged({ logged }: AuthStateModel): boolean {
    return logged;
  }

  @Selector()
  static semesters({ semesters }: AuthStateModel): Semester[] {
    return semesters;
  }

  @Selector()
  static userTypes({ userTypes }: AuthStateModel): UserType[] {
    return userTypes;
  }

  @Action(Register)
  register({}: StateContext<AuthStateModel>, { info }: Register): void {
    this.authService.register(info).subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

  @Action(Login)
  login({}: StateContext<AuthStateModel>, { info }: Login): void {
    this.authService.login(info).subscribe({
      next: response => {
        localStorage.setItem('token', response.data.accesstoken);
        this.router.navigate(['/home']);
      }
    });
  }

  @Action(GetSemester)
  getSemester({ patchState }: StateContext<AuthStateModel>): void {
    this.userService.getSemesters().subscribe({
      next: response => {
        patchState({ semesters: response.data });
      }
    });
  }

  @Action(GetUserTypes)
  getUserTypes({ patchState }: StateContext<AuthStateModel>): void {
    this.userService.getUserTypes().subscribe({
      next: response => {
        patchState({ userTypes: response.data });
      }
    });
  }
}
