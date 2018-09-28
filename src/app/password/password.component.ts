import { PasswordValidators } from './password.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  form = new FormGroup ({
    oldpassword : new FormControl('', Validators.required, PasswordValidators.ValidOldPassword),
    newpassword : new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required)
  })

  get Oldpass(){
    return this.form.get('oldpassword');
  }

  get Newpass(){
    return this.form.get('newpassword');
  }

  get Confirmpass(){
    return this.form.get('confirmpassword');
  }
 

}
