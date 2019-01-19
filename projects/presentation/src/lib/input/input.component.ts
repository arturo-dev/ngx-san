import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @description Input component
 *  Allows the next types:
 *    - Text
 *    - Password
 *    - Number
 *    - Amount // TODO
 */
@Component({
  selector: 'san-presn-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  /**
   * @description Internal value
   */
  innerValue: string;

  /**
   * @description Define the current type
   */
  @Input() type: 'text' | 'password' | 'number' = 'text';

  /**
   * @description Define the placeholder
   */
  @Input() placeholder = '';

  /**
   * @description Define if the input is disabled
   */
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit() {}

  onChange = (value: string) => {};
  onTouched = () => {};

  /**
   * @description Get the value
   */
  get value() {
    return this.innerValue;
  }

  /**
   * @description Allows Angular to update the model
   */
  writeValue(value: string): void {
    this.innerValue = value;
    this.onChange(this.innerValue);
  }

  /**
   * @description Allows Angular to register a function to call when the model changes.
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * @description Allows Angular to register a function to call when the input has been touched.
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
