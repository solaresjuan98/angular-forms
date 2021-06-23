import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('iPhone 12'),
  //   price: new FormControl(899),
  //   existences: new FormControl(500)
  // });

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup = this.formBuilder.group({
    name: ['iPhone 12', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    existences: [0, [Validators.required, Validators.min(0)]]
  })



}
