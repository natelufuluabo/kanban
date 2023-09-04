import { LogInForm } from "@/components/LogInForm";
import styles from "./page.module.scss";
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export default function Home() {
    return (
        <>
            <NavBar />
            <main className={styles.main}>
                <article className={styles.article}>
                    <LogInForm />
                </article>
            </main>
            <Footer />
        </>
    )
};