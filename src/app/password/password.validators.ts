import { AbstractControl } from '@angular/forms';
export class PasswordValidators{
    static ValidOldPassword(control: AbstractControl){
        return new Promise((resolve) => {

            if(control.value !== '1234'){
                resolve({inValidOldPassword : true})
            }else
                resolve(null);
        });
    }
}