import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <a href="#">Home</a>
                <a href="#">Search</a>
                <a href="#">Explore</a>
                <a href="#">Messages</a>
                <a href="#">Notificaitons</a>
                <a href="#">Create</a>
            </footer>
            <div className={styles.copyright}>
                <p>© 2024 ICHgram</p>
            </div>
        </div>
    )
}

export default Footer;

