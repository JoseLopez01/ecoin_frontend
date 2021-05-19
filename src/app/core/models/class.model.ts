export interface Course {
  courseid: number;
  name: string;
  isactive?: boolean;
  schedules: Schedule[];
}

export interface Schedule {
  courseid: number;
  weekdayid: number;
  isactive: boolean;
}
