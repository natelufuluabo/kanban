import styles from "./HeroSection.module.scss";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroTextsContainer}>
                <h1 className={styles.mainHeading}>Get it done for <span className={styles.span1}>REAL</span> with <span className={styles.span1}>Powerful</span> To-do list</h1>
                <Link href="/signup" className={styles.signupButton}>Create new account</Link>
            </div>
        </section>
    )
};