import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingViewInfoComponent } from './setting-view-info.component';

describe('SettingViewInfoComponent', () => {
  let component: SettingViewInfoComponent;
  let fixture: ComponentFixture<SettingViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingViewInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
