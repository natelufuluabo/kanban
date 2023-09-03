import styles from "./Loading.module.scss";

const LoadingComponent = () => {
    return (
        <section className={styles.waiting_page}>
            <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3 className={styles.waiting_text}>Please wait...</h3>
      </section>
    )
}

export default LoadingComponent;