import { Dispatch, SetStateAction } from "react";import styles from "./SignUpForm.module.scss";

interface propsType {
  setSignUpShowing: Dispatch<SetStateAction<boolean>>
}

export const SignUpForm = ({ setSignUpShowing }: propsType) => {
    return (
        <div className={styles.signUpFormContainer}>
            <form className={styles.signUpForm}>
              <div className={styles.topSection}>
                <div className={styles.textContainer}>
                  <h2>Sign Up</h2>
                  <p>It&apos;s quick and easy.</p>
                </div>
                <button onClick={() => setSignUpShowing(false)} className={styles.closeFormButton}>X</button>
              </div>
              <div className={styles.inputContainer}>
                <input placeholder='First Name' />
              </div>
              <div className={styles.inputContainer}>
                <input placeholder='Last Name' />
              </div>
              <div className={styles.inputContainer}>
                <input placeholder='Email' />
              </div>
              <div className={styles.inputContainer}>
                <input placeholder='Password' />
              </div>
              <button onClick={() => setSignUpShowing(false)} className={styles.signUpButton}>Sign Up</button>
            </form>
        </div>
    )
};