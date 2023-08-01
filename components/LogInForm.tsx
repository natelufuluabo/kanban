"use client";
import { FormEvent, useState } from "react";
import { signInUser } from "@/firebase/authentication";
import styles from "./LogInForm.module.scss";

export interface formDataType {
  email: string;
  password: string;
}

export const LogInForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    password: ""
  });
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await signInUser(formData);
    setFormData({
      email: "",
      password: ""
    });
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
          required
        />
      </div>
      <div className={styles.inputFormContainer}>
        <input
          type='password'
          placeholder='Password' 
          name="password"
          value={formData.password}
          onChange={(evt) => setFormData({ ...formData, [evt.target.name]: evt.target.value })}
          required
        />
      </div>
      <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      <button className={styles.logInButton}>Log In</button>
    </form>
  )
}