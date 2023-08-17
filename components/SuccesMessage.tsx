import Link from "next/link";
import styles from "./SuccessMessage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

interface propsType {
    setSuccessMessageShowing : Dispatch<SetStateAction<boolean>>
}

export const SuccessMessage = ({ setSuccessMessageShowing } : propsType) => {
    return (
        <div className={styles.successMessageContainer}>
            <div className={styles.elContainer}>
            <button className={styles.checkEl}>
                <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <p>Your account has been successfully created.</p>
            <p>
                Click 
                <Link className={styles.link} href="/login" onClick={() => setSuccessMessageShowing(false)}>
                    here
                </Link> 
                to login
            </p>
            </div>
        </div>
    )
};