import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/404.png" alt="404" className={styles.errorImage} />
            <h1>Halaman Tidak ditemukan</h1>
        </div>
    );
};

export default Custom404;