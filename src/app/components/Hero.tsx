import Image from "next/image";
import styles from "./Hero.module.css";

import Link from "next/link";
export default function Hero() {
  return (
    
    <div className={styles.hero}>
      <div className={styles.details}>
        <h1 id={styles.h1}>
          Hello! <span id={styles.h2}>{`I'm`}</span>
        </h1>
        <p id={styles.p1}>Iraj Fatima</p>
        <h3 id={styles.h3}>Frontend Developer & UI/UX Designer</h3>
        <p id={styles.p}>
          A creator of impactful and innovative web experiences.From first
          lines of code to pixel-perfect designs, I bring ideas to life. {`Let’s`}
          collaborate and bring your vision to life in the digital world.
        </p>
        <Link href="/myCV.pdf">
          <button className={styles.button1}>Download CV</button>
        </Link>
      </div>
      <div className={styles.profile}>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}
