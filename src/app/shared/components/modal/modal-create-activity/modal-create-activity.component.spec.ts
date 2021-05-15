import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateActivityComponent } from './modal-create-activity.component';

describe('ModalCreateActivityComponent', () => {
  let component: ModalCreateActivityComponent;
  let fixture: ComponentFixture<ModalCreateActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
