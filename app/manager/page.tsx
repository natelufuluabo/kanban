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
import { getProject } from "@/firebase/projectsCollection";
import LoadingComponent from "@/components/Loading";
import { LogginError } from "@/components/LoginError";
import { getTasks } from "@/firebase/tasksCollection";


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
                const projectData = await getProject(userData?.id);
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
                <div className={styles.appContainer}>
                    <div className={styles.sideBar}>
                        <div className={styles.logoContainer}>
                            <h1 className={styles.logo}>kanban</h1>
                        </div>
                        <p>ALL PROJECT</p>
                        <ul className={styles.projectList}>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className={styles.mainContainer}>
                        <div className={styles.topBar}></div>
                        <div className={styles.tasksContainer}>
                            <div className={styles.todosContainer}></div>
                            <div className={styles.doingContainer}></div>
                            <div className={styles.doneContainer}></div>
                        </div>
                    </div>
                    <p>Manager page</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
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