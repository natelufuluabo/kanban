"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { signOutUser } from "@/firebase/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/authentication";
import { getUser } from "@/firebase/usersCollection";
import LoadingComponent from "@/components/Loading";
import { LogginError } from "@/components/LoginError";

export default function Home() {
    const [userLoggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoadingState] = useState(true);
    const [signingOut, setSigningOut] = useState(false);
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
        return !signingOut && <LogginError />
    }
    return (
        <main className={styles.main}>
            { isLoading ? <LoadingComponent /> : renderPage() }
        </main>
    )
};