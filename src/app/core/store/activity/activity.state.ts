import { Injectable } from '@angular/core';
import { Activity } from '@core/models/activity.model';
import { Course } from '@core/models/class.model';
import { ActivityService } from '@core/services/activity/activity.service';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { CreateActivity, GetCourseActivities } from './activity.actions';

export class ActivityStateModel {
  public currentCourseId!: number;
  public activities!: Activity[];
}

const defaults: ActivityStateModel = {
  currentCourseId: 0,
  activities: []
};

@State<ActivityStateModel>({
  name: 'activity',
  defaults
})
@Injectable()
export class ActivityState {

  constructor(
    private activityService: ActivityService,
    private store: Store
  ) {}

  @Selector()
  static getActivities({ activities }: ActivityStateModel): Activity[] {
    return activities;
  }

  @Action(GetCourseActivities)
  getCourseActivities({ patchState }: StateContext<ActivityStateModel>, { courseId }: GetCourseActivities): void {
    this.activityService.getActivities(courseId).subscribe({
      next: response => {
        patchState({ activities: response.data, currentCourseId: courseId });
      }
    });
  }

  @Action(CreateActivity)
  createActivity({ getState }: StateContext<ActivityStateModel>, { activity }: CreateActivity): void {
    this.activityService.createActivity({ ...activity, courseid: getState().currentCourseId }).subscribe({
      next: response => {
        if (response.status === 201) {
          this.store.dispatch(new GetCourseActivities(getState().currentCourseId));
        }
      }
    });
  }
}
