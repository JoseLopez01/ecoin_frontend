import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewHeaderComponent } from './class-view-header.component';

describe('ClassViewHeaderComponent', () => {
  let component: ClassViewHeaderComponent;
  let fixture: ComponentFixture<ClassViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
