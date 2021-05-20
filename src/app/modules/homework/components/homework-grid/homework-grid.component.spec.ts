import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkGridComponent } from './homework-grid.component';

describe('HomeworkGridComponent', () => {
  let component: HomeworkGridComponent;
  let fixture: ComponentFixture<HomeworkGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
