import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // for local references
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: '',
    price: 10,
    available: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls.product?.invalid && this.myForm?.controls.product?.touched;
  }

  validPrice(): boolean {
    // this.myForm.controls.price.setErrors()
    return this.myForm?.controls.price?.touched && this.myForm?.controls.price?.value < 0;
  }

  // save(myForm: NgForm) {
  save() {
    console.log(this.myForm);
    console.log('Correct!!');
    this.myForm.resetForm({
      product: '',
      price: 0,
      available: 0
    });
  }

}
