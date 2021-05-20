import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Semester, User, UserType } from '@core/models/user.model';
import { AuthService } from '@core/services/auth/auth.service';
import { UserService } from '@core/services/user/user.service';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Register, Login, GetSemester, GetUserTypes, GetLoggedUser } from './auth.actions';

export class AuthStateModel {
  public userTypes!: UserType[];
  public semesters!: Semester[];
  public loggedUser!: User | null;
  public logged!: boolean;
}

const defaults: AuthStateModel = {
  loggedUser: null,
  userTypes: [],
  semesters: [],
  logged: false,
};

@State<AuthStateModel>({
  name: 'auth',
  defaults,
})
@Injectable()
export class AuthState {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private zone: NgZone,
    private store: Store
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

  @Selector()
  static getLoggedUser({ loggedUser }: AuthStateModel): User | null {
    return loggedUser;
  }

  @Action(Register)
  register({}: StateContext<AuthStateModel>, { info }: Register): void {
    this.authService.register(info).subscribe({
      next: (response) => {
        if (response.status === 201) {
          this.zone.run(() => {
            this.router.navigate(['/']);
          });
        }
      },
    });
  }

  @Action(Login)
  login({}: StateContext<AuthStateModel>, { info }: Login): void {
    this.authService.login(info).subscribe({
      next: (response) => {
        this.zone.run(() => {
          localStorage.setItem('token', response.data.accesstoken);
          this.router.navigate(['/home']);
          this.store.dispatch(new GetLoggedUser());
        });
      },
    });
  }

  @Action(GetSemester)
  getSemester({ patchState }: StateContext<AuthStateModel>): void {
    this.userService.getSemesters().subscribe({
      next: (response) => {
        patchState({ semesters: response.data });
      },
    });
  }

  @Action(GetUserTypes)
  getUserTypes({ patchState }: StateContext<AuthStateModel>): void {
    this.userService.getUserTypes().subscribe({
      next: (response) => {
        patchState({ userTypes: response.data });
      },
    });
  }

  @Action(GetLoggedUser)
  getLoggedUser({ patchState }: StateContext<AuthStateModel>): void {
    this.userService.getLoggedUser().subscribe({
      next: response => {
        patchState({ loggedUser: response.data[0] });
      }
    });
  }
}
