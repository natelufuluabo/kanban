import * as EmailValidator from 'email-validator';
import { User } from "@/classes/User";
import { Dispatch, SetStateAction } from 'react';

export const signUpFormformValidate = (formData: User, setErrorMessage: Dispatch<SetStateAction<string>>) => {
    const formDatas = formData;
    const passwordValidator = require("password-validator");
    const passwordSchema = new passwordValidator();
    passwordSchema
      .is().min(8)
      .is().max(14)
      .has().digits(1)                                
      .has().not().spaces()
    if (formDatas.firstName.length <= 0 || formDatas.lastName.length <= 0 || !EmailValidator.validate(formDatas.email) || !passwordSchema.validate(formDatas.password)) {
      if (formDatas.firstName.length <= 0) {
        setErrorMessage("First Name Required");
        return false;
      }
      if (formDatas.lastName.length <= 0) {
        setErrorMessage("First Name Required");
        return false;
      }
      if (!EmailValidator.validate(formDatas.email)) {
        setErrorMessage("Invalid Email");
        return false;
      } 
      if (!passwordSchema.validate(formDatas.password)) {
        setErrorMessage("Invalid Password. Password must have: a minimum of 8 and a maximum of 14 characters, a mix of uppercase and lowercase letters, at least one digit and no spaces.");
        return false;
      }
    } else return true;
}