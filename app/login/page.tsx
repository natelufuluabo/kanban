import { NavBar } from "@/components/NavBar";
import { LogInForm } from "@/components/LogInForm";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <article className={styles.article}>
                    <LogInForm />
                </article>
            </main>
        </>
    )
};