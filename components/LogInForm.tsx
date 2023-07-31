import styles from "./LogInForm.module.scss";

export const LogInForm = () => {
    return (
        <form className={styles.logInForm}>
            <div className={styles.inputFormContainer}>
              <input 
                type='email'
                placeholder='Email'
                required
              />
            </div>
            <div className={styles.inputFormContainer}>
              <input
                type='password'
                placeholder='Password' 
                required
              />
            </div>
            <button className={styles.logInButton}>Log In</button>
        </form>
    )
}