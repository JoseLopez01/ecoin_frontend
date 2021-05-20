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
    base: `${environment.apiUrl}/users`
  },
  weekdays: {
    all: `${environment.apiUrl}/week-days`
  },
  price: {
    all: `${environment.apiUrl}/prices`,
    base:`${environment.apiUrl}/prices`
  },
  class: {
    create: `${environment.apiUrl}/courses`,
    base: `${environment.apiUrl}/courses`,
    schedule: `${environment.apiUrl}/courses/schedule`
  },
  schedule: {
    base: `${environment.apiUrl}/schedules`
  },
  activity: {
    base: `${environment.apiUrl}/activities`
  },
  shop: {
    base: `${environment.apiUrl}/shops`
  },
  reward: {
    base: `${environment.apiUrl}/rewards`
  },
  students: {
    base: `${environment.apiUrl}/students`,
    addToCourse: `${environment.apiUrl}/student-courses`
  }
};
