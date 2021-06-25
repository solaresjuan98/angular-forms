import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


  constructor() { }

  cantBeJuan333(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'juan333') {
      // Error
      return {
        noJuan333: true,
      };
    }

    return null;
  };

  sameFields(field1: string, field2: string) {

    return (formGroup: AbstractControl) => {

      console.log(formGroup);

      const pass1 = formGroup.get(field1)?.value;
      const pass2 = formGroup.get(field2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(field2)?.setErrors({ notEqual: true })
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null)
      return null;
    }
  }

}
