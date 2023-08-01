"use client";
import { signOutUser } from "@/firebase/authentication";

export default function Home() {
    return (
        <main>
            Manager page
            <button onClick={signOutUser}>Sign Out</button>
        </main>
    )
};