import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateActivity } from '@core/store/activity/activity.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-create-homework',
  templateUrl: './create-homework.component.html',
  styleUrls: ['./create-homework.component.scss']
})
export class CreateHomeworkComponent implements OnInit {

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
    if (this.form.valid) {
      this.store.dispatch(new CreateActivity(this.form.value));
    }
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      until: [null, Validators.required],
      since: [null, Validators.required]
    });
  }

}
