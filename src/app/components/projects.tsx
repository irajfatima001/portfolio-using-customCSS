import Image from "next/image";
import styles from "./projects.module.css";

import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.r1}>
        <div className={styles.r2}>
          <h1 className={styles.r3}>PROJECTS</h1>
          <div className={styles.r4}>
            <div className={styles.r5}>
              <Image
                src="/Mask group1.png"
                alt="project1"
                width={300}
                height={200}
                className={styles.project1}
              />
              <h1 id={styles.r6}>JEWELLEGANCE</h1>
              <p id={styles.r7}>E-commerce Website</p>
              <Link
                target="_blank"
                href={
                  "https://jewellery-website-using-next-js-tailwind-css.vercel.app/"
                }
              >
                <button id={styles.r8}>View Project</button>
              </Link>
            </div>
            <div className={styles.r9}>
              <Image
                src="/Mask group.png"
                alt="project2"
                width={300}
                height={200}
                className={styles.project2}
              />
              <h1 id={styles.r10}>INWOOD</h1>
              <p id={styles.r11}>E-commerce Website</p>
              <Link
                target="_blank"
                href={"https://e-commerce-figma-website.vercel.app/"}
              >
                <button id={styles.r12}>View Project</button>
              </Link>
            </div>
            <div className={styles.r9}>
              <Image
                src="/Mask group1.png"
                alt="project2"
                width={300}
                height={200}
                className={styles.project2}
              />
              <h1 id={styles.r10}>PORTFOLIO</h1>
              <p id={styles.r11}>Personal Website</p>
              <Link
                target="_blank"
                href={
                  "https://portfolio-using-next-js-tailwind-css.vercel.app/"
                }
              >
                <button id={styles.r12}>View Project</button>
              </Link>
            </div>
            <div className={styles.r9}>
              <Image
                src="/Mask group.png"
                alt="project2"
                width={300}
                height={200}
                className={styles.project2}
              />
              <h1 id={styles.r10}>FOODELICIOUS</h1>
              <p id={styles.r11}>E-commerce Website</p>
              <Link
                target="_blank"
                href={
                  "https://multipage-website-using-tailwind-css.vercel.app/"
                }
              >
                <button id={styles.r12}>View Project</button>
              </Link>
            </div>
          </div>
          <section id="contact">
            <div className={styles.s1}>
              <div className={styles.s2}>
                <h1 className={styles.s3}>Get In Touch</h1>
                <p className={styles.s4}>
                  {`Let’s`} turn your ideas into reality! Feel free to reach
                  out, and {`let's`} create something amazing together.
                </p>
              </div>
              <div className={styles.s5}>
                <Link href="/contact">
                  <button className={styles.s6}>Contact Me</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
