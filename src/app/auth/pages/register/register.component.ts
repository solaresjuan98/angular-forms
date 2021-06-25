import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
// import { cantBeJuan333, emailPattern, nameLastNamePattern } from 'src/app/shared/validator/validations';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})


export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.nameLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.cantBeJuan333]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.sameFields('password', 'password2')]
  })

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Juan Solares',
      email: 'test@gmail.com',
      username: 'solaresjuan43',
      password: '123456',
      password2: '123456'
    });
  }

  validField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }



  get emailErrorMsg():string {
    const errors = this.myForm.get('email')?.errors;

    if(errors?.required){
      return 'email is required'
    }else if(errors?.pattern) {
      return 'the email format is wrong'
    }else if(errors?.emailUsed) {
      return 'the email is already used by another user'
    }
    return '';
    

  }


  // emailRequired () {
  //   return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  // }

  // emailFormat () {
  //   return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  // }

  // emailUsed() {
  //   return this.myForm.get('email')?.errors?.emailUsed && this.myForm.get('email')?.touched;

  // }

  submitForm() {
    console.log(this.myForm.valid);
    this.myForm.markAllAsTouched();
  }

}
