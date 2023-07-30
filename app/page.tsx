import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import platformImage from "../Assets/platform-image.jpeg";
import illustration from "../Assets/illustration.svg";

export default function Home() {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <Link className={styles.homeLink} href="/">kanban</Link>
        </div>
        <div className={styles.ctaLinkContainer}>
          <Link className={styles.signinLink} href="/signin">Sign In</Link>
          <Link className={styles.signupLink} href="/signup">Start for free</Link>
        </div>
      </nav>
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          <section className={styles.heroSection}>
            <Image className={styles.illustrationImage} priority src={illustration} alt='illustration-image'/>
            <div className={styles.heroTextsContainer}>
              <h1 className={styles.mainHeading}>Get it done for <span className={styles.span1}>REAL</span> with <span className={styles.span1}>Powerful</span> To-do list</h1>
              <p className={styles.texts}>Become focused, organized, and calm with kanban. Top #1<br></br> task manager and to-do list app in the world.</p>
              <Link className={styles.signupButton} href="/signup">Start for free</Link>
            </div>
          </section>
          <section className={styles.featuresSection}>
            <div className={styles.featureContainer}>
              <h3 className={styles.featureTitle}>With you everywhere</h3>
              <p className={styles.featureDescription}>Use kanban&apos;s apps, extensions and widgets on any device or platform.</p>
            </div>
            <div className={styles.featureContainer}>
              <h3 className={styles.featureTitle}>Make kanban yours</h3>
              <p className={styles.featureDescription}>Customize your to-do list with filters, labels, priorities, and more.</p>
            </div>
            <div className={styles.featureContainer}>
              <h3 className={styles.featureTitle}>Connect with your other tools</h3>
              <p className={styles.featureDescription}>Link kanban with your calendar, voice assistant, and 30+ other tools.</p>
            </div>
          </section>
        </article>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerText}>
          &copy; 2023 kanban Team. All rights reserved
        </div>
        <div className={styles.footerText}>
          Terms / Privacy policy
        </div>
      </footer>
    </>
  )
};
