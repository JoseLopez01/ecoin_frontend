import { environment } from 'environments/environment';

export const CONSTANTS = {
  auth: {
    login: `${environment.apiUrl}/auth/login`,
    register: `${environment.apiUrl}/auth/signup`,
    logout: `${environment.apiUrl}/auth/logout`,
    user: `${environment.apiUrl}/auth/user`,
  },
  user: {
    userTypes: `${environment.apiUrl}/user-types`,
    semesters: `${environment.apiUrl}/semesters`,
  },
};
