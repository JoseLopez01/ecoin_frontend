import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewInfoComponent } from './class-view-info.component';

describe('ClassViewInfoComponent', () => {
  let component: ClassViewInfoComponent;
  let fixture: ComponentFixture<ClassViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
