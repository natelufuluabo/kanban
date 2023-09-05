"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { signOutUser } from "@/firebase/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/authentication";
import { getUser } from "@/firebase/usersCollection";
import { getProject } from "@/firebase/projectsCollection";
import { LogginError } from "@/components/LoginError";
import LoadingComponent from "@/components/Loading";
import { SideBar } from "@/components/SideBar";
import { useRecoilState } from "recoil";
import { userDataAtom, projectDataAtom } from "../recoilContextProvider";


export default function Home() {
    const [userLoggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoadingState] = useState(true);
    const [signingOut, setSigningOut] = useState(false);
    const [userData, setUserData] = useRecoilState(userDataAtom);
    const [projectData, setProjectData] = useRecoilState(projectDataAtom);
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
                setUserData(await getUser(user.uid));
                setProjectData(await getProject(userData?.id))
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
                    <SideBar />
                    <div className={styles.mainContainer}>
                        <div className={styles.topBar}></div>
                        <div className={styles.tasksContainer}>
                            <div className={styles.todosContainer}></div>
                            <div className={styles.doingContainer}></div>
                            <div className={styles.doneContainer}></div>
                        </div>
                    <p>Manager page</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                    </div>
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