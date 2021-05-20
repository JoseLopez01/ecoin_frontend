export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phonumber: string;
  usertypeid: number;
  semesterid: number;
  password: string;
  semester?: Semester;
};

export interface UserType {
  usertypeid: number;
  description: string;
  isactive: boolean;
}

export interface Semester {
  semesterid: number;
  description: string;
  isactive: boolean;
}
