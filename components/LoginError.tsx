import styles from "./LogginError.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBar } from "./NavBar";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Footer } from "./Footer";

export const LogginError = () => {
    return (
        <div className={styles.errorMessageContainer}>
            <NavBar />
            <div className={styles.textContainer}>
                <button className={styles.triangle}>
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                    />
                </button>
                <p>Error 404: Not Found. You are not logged in.</p>
                <p>Click <Link href="/login">here</Link> to log in</p>
            </div>
            <Footer />
        </div>
    )
}