import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.div}>
      <section id="about">
        <div className={styles.center}>
          <div className={styles.about}>
            <div className={styles.aboutMe}>
              <h1 id={styles.head1}> ABOUT ME</h1>
              <p id={styles.para}>
                A creative problem-solver with a passion for bringing ideas to
                life. I believe in the power of innovation and collaboration to
                create meaningful impact. {`Let’s`} work together to turn your
                vision into reality.
              </p>
            </div>
            <div className={styles.aboutButtton}>
              <Link href="/about">
                <button className={styles.see}>Click To See More..</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className={styles.services}>
          <div className={styles.h0}>
            <h1>SERVICES</h1>
          </div>
          <div className={styles.detail1}>
            <h1 id={styles.graphic}>Frontend Developer</h1>
            <p id={styles.p0}>
              <br />
              <br/>
              Strive to create visually engaging and user-centric designs that
              effectively communicate messages and meet the unique needs of each
              project as a frontend web developer
            </p>
          </div>
          <div className={styles.detail2}>
            <h1 id={styles.front}>SEO & </h1>
            <h2 id={styles.front2}>Social media marketing</h2>
            <p id={styles.p2}>
              Delivering data-driven, user-focused strategies that bring my
              {`client's`} vision to life through effective SEO and social media
              marketing techniques, backed by industry expertise
            </p>
          </div>
          <div className={styles.detail3}>
            <h1 id={styles.ui}>UI/UX Designing</h1>
            <p id={styles.p3}>
              <br />
              <br/>
              Delivering intuitive, user-centered designs that bring my {`client's`}
              vision to life by blending creativity with technical expertise in
              UI/UX design
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
