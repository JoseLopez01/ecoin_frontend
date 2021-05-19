import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsViewHeaderComponent } from './notifications-view-header.component';

describe('NotificationsViewHeaderComponent', () => {
  let component: NotificationsViewHeaderComponent;
  let fixture: ComponentFixture<NotificationsViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsViewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
