"use client";
import { useEffect, useState } from "react";
import { signOutUser } from "@/firebase/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/authentication";

export default function Home() {
    const [userLoggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                console.log(user.uid);
            } else {
                setLoggedIn(false);
                window.location.href = "/login"
            }
        });
    });
    const renderPage = () => {
        if (userLoggedIn) {
            return (
                <>
                    <p>Manager page</p>
                    <button onClick={signOutUser}>Sign Out</button>
                </>
            )
        }
        return (
            <>
                <p>Error 404: You must be logged in to be here</p>
            </>
        )
    }
    return (
        <main>
            {renderPage()}
        </main>
    )
};