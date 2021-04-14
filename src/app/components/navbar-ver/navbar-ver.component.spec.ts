import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVerComponent } from './navbar-ver.component';

describe('NavbarVerComponent', () => {
  let component: NavbarVerComponent;
  let fixture: ComponentFixture<NavbarVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
