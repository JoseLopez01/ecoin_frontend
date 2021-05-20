import { WeekDay } from './weekday.model';

export interface Course {
  courseid: number;
  name: string;
  isactive?: boolean;
  weekdays: WeekDay[];
}

export interface Schedule {
  courseid: number;
  weekdayid: number;
  isactive: boolean;
}
