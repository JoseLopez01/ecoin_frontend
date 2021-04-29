import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text-icon',
  templateUrl: './input-text-icon.component.html',
  styleUrls: ['./input-text-icon.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextIconComponent),
      multi: true
    }
  ]
})
export class InputTextIconComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder = '';
  @Input() icon = '';

  constructor() { }

  onChange = (_: any): any => {};

  writeValue(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  ngOnInit(): void {
  }

}
