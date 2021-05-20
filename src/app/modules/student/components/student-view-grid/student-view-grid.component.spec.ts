import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewGridComponent } from './student-view-grid.component';

describe('StudentViewGridComponent', () => {
  let component: StudentViewGridComponent;
  let fixture: ComponentFixture<StudentViewGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
