import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewScheduleComponent } from './class-view-schedule.component';

describe('ClassViewScheduleComponent', () => {
  let component: ClassViewScheduleComponent;
  let fixture: ComponentFixture<ClassViewScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
