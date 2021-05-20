import { Component, OnInit } from '@angular/core';
import { CardOptions } from '@core/models/card.model';
import { Course } from '@core/models/class.model';
import { User } from '@core/models/user.model';
import { AuthState } from '@core/store/auth/auth.state';
import { GetCourses, GetStudentCourses } from '@core/store/course/course.actions';
import { CourseState } from '@core/store/course/course.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {

  @Select(CourseState.selectedCourse) selectedCourse$!: Observable<Course>;
  @Select(CourseState.showInfo) showInfo$!: Observable<boolean>;
  @Select(AuthState.getLoggedUser) user$!: Observable<User>;

  cardOptions!: CardOptions;
  showHeader = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.createCard();
    this.getUserType();
  }

  private createCard(): void {
    this.cardOptions = {
      showCloseButton: true,
      height: '95%',
      width: '100%',
      title: 'Algorithms'
    };
  }

  private getUserType(): void {
    this.user$.subscribe({
      next: user => {
        if (user) {
          this.showHeader = [3, 2].includes(user.usertypeid);
          this.getClasses(user.usertypeid);
        }
      }
    });
  }

  private getClasses(userTypeId: number): void {
    if ([3, 2].includes(userTypeId)) {
      this.store.dispatch(new GetCourses());
    } else {
      this.store.dispatch(new GetStudentCourses());
    }
  }

}
