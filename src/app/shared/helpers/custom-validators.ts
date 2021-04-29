import { AbstractControl } from '@angular/forms';

export const confirmPassword = (
  control: AbstractControl
): { invalid: boolean } | null => {
  if (
    control.get('password')?.value !== control.get('confirmpassword')?.value
  ) {
    return { invalid: true };
  }
  return null;
};
