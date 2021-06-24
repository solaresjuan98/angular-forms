import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({
      ...this.user,
      conditions: false
    });

    // Suscribe to FIELD changes
    this.myForm.get('conditions')?.valueChanges.subscribe((newValue) => {
      console.log(newValue);
    })

    // Suscribe to form changes
    this.myForm.valueChanges.subscribe(({conditions, ...rest}) => {
      //delete form.conditions;
      //this.user = form;
    
      this.user = rest;
      
    })
  }

  myForm: FormGroup = this.formBuilder.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue]
  });

  user = {
    gender: 'F',
    notifications: true,
  }

  save() {
    const formValue ={ ...this.myForm.value};

    delete formValue.conditions;

    this.user = formValue;

    console.log(formValue);
  }

}
