"use client";
import { FormEvent, useState } from "react";
import styles from "./LogInForm.module.scss";
import { signInUser } from "@/firebase/authentication";
import { loginFormformValidate } from "@/Utilities/utils-functions";
import { DualRingComponent } from "./DualRing";

export interface formDataType {
  email: string;
  password: string;
}

export const LogInForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [waiting, setWaiting] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: ""
  });
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("Clicked")
    setWaiting(true);
    if (loginFormformValidate(formData, setErrorMessage)) {
      await signInUser(formData, setErrorMessage, setFormData);
    }
    setWaiting(false);
  }
  return (
    <form className={styles.logInForm} onSubmit={handleSubmit}>
      <div className={styles.inputFormContainer}>
        <input 
          type='email'
          placeholder='Email'
          name="email"
          value={formData.email}
          onChange={(evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })}
        />
      </div>
      <div className={styles.inputFormContainer}>
        <input
          type='password'
          placeholder='Password' 
          name="password"
          value={formData.password}
          onChange={(evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })}
        />
      </div>
      <div className={styles.errorContainer}>
        <p className={styles.errorMessage}>{errorMessage}</p>
      </div>
      <button className={styles.logInButton}>Log In { waiting && <DualRingComponent /> }</button>
    </form>
  )
}