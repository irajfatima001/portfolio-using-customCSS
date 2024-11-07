import styles from "./Footer.module.css"
export default function Footer(){
    return(
        <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <div className={styles.logo}>Iraj Fatima</div>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>
        </div>

        
      </div>

      <div className={styles.bottom}>
        <p>© 2024 Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
        
    )
}