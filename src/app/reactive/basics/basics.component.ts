import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('iPhone 12'),
  //   price: new FormControl(899),
  //   existences: new FormControl(500)
  // });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      name: 'iPhone 12',
      price: 899,
      existences: 45
    })
  }

  myForm: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    existences: [, [Validators.required, Validators.min(0)]]
  })


  validField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save() {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
