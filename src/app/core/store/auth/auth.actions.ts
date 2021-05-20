import { LoginInfo } from '@core/models/auth.model';
import { User } from '@core/models/user.model';

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public info: User) {}
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public info: LoginInfo) {}
}

export class GetSemester {
  static readonly type = '[Auth] Get Semesters';
  constructor() {}
}

export class GetUserTypes {
  static readonly type = '[Auth] Get User Types';
  constructor() {}
}

export class GetLoggedUser {
  static readonly type = '[Auth] Get Logged User';
  constructor() {}
}
