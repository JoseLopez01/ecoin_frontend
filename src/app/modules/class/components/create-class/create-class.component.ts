import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCourse } from '@core/store/course/course.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.store.dispatch(new CreateCourse(this.form.value));
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

}
