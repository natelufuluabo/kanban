"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { signOutUser } from "@/firebase/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/authentication";
import { getUser } from "@/firebase/usersCollection";
import LoadingComponent from "@/components/Loading";

export default function Home() {
    const [userLoggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoadingState] = useState(true);
    const [signingOut, setSigningOut] = useState(false);
    const managerContainer = useRef(null);
    const handleSignOut = async() => {
        setSigningOut(true);
        setLoadingState(true);
        await signOutUser();
        window.location.href = "/login";
    }
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setLoggedIn(true);
                const userData = await getUser(user.uid);
                setLoadingState(false);
            } else {
                setLoggedIn(false);
                setLoadingState(false);
            }
        });
    });
    const renderPage = () => {
        if (userLoggedIn) {
            return (
                <>
                    <p>Manager page</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            )
        }
        return (
            <>
                {
                    !signingOut && 
                    <div ref={managerContainer} className={styles.errorMessageContainer}>
                        <button className={styles.triangle}>
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                            />
                        </button>
                        <p>Error 404: Not Found. You are not logged in.</p>
                        <p>Click <Link href="/login">here</Link> to log in</p>
                    </div>
                }
            </>
        )
    }
    return (
        <main className={styles.main}>
            { isLoading ? <LoadingComponent /> : renderPage() }
        </main>
    )
};