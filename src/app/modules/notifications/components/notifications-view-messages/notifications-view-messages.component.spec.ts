import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsViewMessagesComponent } from './notifications-view-messages.component';

describe('NotificationsViewMessagesComponent', () => {
  let component: NotificationsViewMessagesComponent;
  let fixture: ComponentFixture<NotificationsViewMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsViewMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsViewMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
