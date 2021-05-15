import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateClassComponent } from './modal-create-class.component';

describe('ModalCreateClassComponent', () => {
  let component: ModalCreateClassComponent;
  let fixture: ComponentFixture<ModalCreateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
