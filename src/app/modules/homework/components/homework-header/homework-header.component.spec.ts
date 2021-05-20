import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkHeaderComponent } from './homework-header.component';

describe('HomeworkHeaderComponent', () => {
  let component: HomeworkHeaderComponent;
  let fixture: ComponentFixture<HomeworkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
