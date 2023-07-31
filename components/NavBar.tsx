import styles from "./NavBar.module.scss";
import Link from "next/link";

export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logoContainer}>
                <Link className={styles.homeLink} href="/">kanban</Link>
            </div>
        </nav>
    )
};