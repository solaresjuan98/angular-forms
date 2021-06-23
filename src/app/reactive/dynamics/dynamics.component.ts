import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})

export class DynamicsComponent {

  constructor(private formBuilder: FormBuilder) { }

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array(
      [
        ['Super Mario Bros', Validators.required ], 
        ['Fifa 21', Validators.required]], 
        Validators.required)
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  validField(field: string) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;

  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

  addFavorite() {
    if(this.newFavorite.invalid){
      return;
    }

    //this.favoritesArr.push( new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArr.push( this.formBuilder.control(this.newFavorite.value, Validators.required));
    this.newFavorite.reset();
  }

  delete(index: number) {
    this.favoritesArr.removeAt(index);
  }
}
