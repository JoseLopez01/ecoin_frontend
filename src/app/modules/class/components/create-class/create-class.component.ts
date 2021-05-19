import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '@core/services/class/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.classService.createClass(this.form.value).subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

}
