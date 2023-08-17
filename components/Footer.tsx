import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
            kanban &copy; 2023 
            </p>
            <p className={styles.footerText}>
            Terms / Privacy policy
            </p>
        </footer>
    )
};