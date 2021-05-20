export interface Activity {
  activityid?: number;
  courseid?: number;
  name: string;
  description: string;
  until: string;
  since: string;
  isactive?: boolean;
}
