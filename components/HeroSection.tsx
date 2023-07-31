import { Dispatch, SetStateAction } from "react";
import styles from "./HeroSection.module.scss";
interface propsType {
    setSignUpShowing: Dispatch<SetStateAction<boolean>>
}

export const HeroSection = ({ setSignUpShowing }: propsType) => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroTextsContainer}>
                <h1 className={styles.mainHeading}>Get it done for <span className={styles.span1}>REAL</span> with <span className={styles.span1}>Powerful</span> To-do list</h1>
                <button onClick={() => setSignUpShowing(true)} className={styles.signupButton}>Create new account</button>
            </div>
        </section>
    )
};