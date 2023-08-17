"use client";
import styles from './page.module.scss';
import { HeroSection } from '@/components/HeroSection';
import { LogInForm } from '@/components/LogInForm';

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          <HeroSection />
          <LogInForm />
        </article>
      </main>
    </>
  )
};
