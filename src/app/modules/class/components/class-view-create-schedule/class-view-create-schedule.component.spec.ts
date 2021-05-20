import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewCreateScheduleComponent } from './class-view-create-schedule.component';

describe('ClassViewCreateScheduleComponent', () => {
  let component: ClassViewCreateScheduleComponent;
  let fixture: ComponentFixture<ClassViewCreateScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewCreateScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewCreateScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
