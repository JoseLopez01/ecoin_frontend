import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassViewGridComponent } from './class-view-grid.component';

describe('ClassViewGridComponent', () => {
  let component: ClassViewGridComponent;
  let fixture: ComponentFixture<ClassViewGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassViewGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
