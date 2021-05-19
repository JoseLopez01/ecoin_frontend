import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-class-view-header',
  templateUrl: './class-view-header.component.html',
  styleUrls: ['./class-view-header.component.scss']
})
export class ClassViewHeaderComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
