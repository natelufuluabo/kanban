import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import * as EmailValidator from 'email-validator';
import styles from "./SignUpForm.module.scss";
import { User } from "@/classes/User";
import { signUpFormformValidate } from "@/Utilities/utils-functions";


interface propsType {
  setSignUpShowing: Dispatch<SetStateAction<boolean>>
}

export const SignUpForm = ({ setSignUpShowing }: propsType) => {
  const [formDatas, setFormDatas] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (signUpFormformValidate(formDatas, setErrorMessage)) {
      const newUser = new User(formDatas.firstName, formDatas.lastName, formDatas.email, formDatas.password);
      console.log(newUser);
      setFormDatas({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
      setSignUpShowing(false);
    }
  };
  return (
    <div className={styles.signUpFormContainer}>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <div className={styles.topSection}>
          <div className={styles.textContainer}>
            <h2>Sign Up</h2>
            <p>It&apos;s quick and easy.</p>
          </div>
          <button onClick={() => setSignUpShowing(false)} className={styles.closeFormButton}>X</button>
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text"
            placeholder='First Name'
            name="firstName"
            value={formDatas.firstName}
            onChange={(evt) => setFormDatas({ ...formDatas, [evt.target.name]: evt.target.value})} 
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="text"
            placeholder='Last Name'
            name="lastName"
            value={formDatas.lastName}
            onChange={(evt) => setFormDatas({ ...formDatas, [evt.target.name]: evt.target.value})}  
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="email"
            placeholder='Email'
            name="email"
            value={formDatas.email}
            onChange={(evt) => setFormDatas({ ...formDatas, [evt.target.name]: evt.target.value})} 
          />
        </div>
        <div className={styles.inputContainer}>
          <input 
            type="password"
            placeholder='Password' 
            name="password"
            value={formDatas.password}
            onChange={(evt) => setFormDatas({ ...formDatas, [evt.target.name]: evt.target.value})}  
          />
        </div>
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
        <button type="submit" className={styles.signUpButton}>Sign Up</button>
      </form>
    </div>
  )
};