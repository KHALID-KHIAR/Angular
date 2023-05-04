
import { AbstractControl,ValidatorFn, ValidationErrors } from "@angular/forms";

export const matchPassword : ValidatorFn =  (control: AbstractControl) : ValidationErrors | null =>{

const password = control.get("password")
const ConfirmePassword = control.get("confirmePassword")
    if(password?.value !== ConfirmePassword?.value)
    return {passwordmisMatch: true}
    return null ;

}