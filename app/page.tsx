"use client";
import { useState } from 'react';
import styles from './page.module.scss';
import { NavBar } from '@/components/NavBar';
import { HeroSection } from '@/components/HeroSection';
import { LogInForm } from '@/components/LogInForm';
import { SignUpForm } from '@/components/SignUpForm';

export default function Home() {
  const [signUpShowing, setSignUpShowing] = useState<boolean>(false);
  return (
    <>
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          <HeroSection
            setSignUpShowing = {setSignUpShowing}
          />
          <LogInForm />
          { signUpShowing && <SignUpForm setSignUpShowing = {setSignUpShowing} /> }
        </article>
      </main>
    </>
  )
};
