"use client";
import styles from './page.module.scss';
import { HeroSection } from '@/components/HeroSection';
import { LogInForm } from '@/components/LogInForm';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          <HeroSection />
          <LogInForm />
        </article>
      </main>
      <Footer />
    </>
  )
};
