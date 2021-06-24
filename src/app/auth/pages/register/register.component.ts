import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  // regex
  nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.nameLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]

  })

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Juan Solares',
      email: 'test@gmail.com'
    });

  }

  validField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    console.log(this.myForm.valid);
    this.myForm.markAllAsTouched();
  }

}
