import React from "react";
import Link from "next/link";

import Image from "next/image";
import styles from "../components/Page.module.css";

const skillsData = [
  { name: "HTML", logo: "/pix1.png", proficiency: 90 },
  { name: "CSS", logo: "/pix2.png", proficiency: 85 },
  { name: "JavaScript", logo: "/pix3.jpg", proficiency: 80 },
  { name: "React.js", logo: "/React js.jpg", proficiency: 75 },
  { name: "Next.js", logo: "/next.jpg", proficiency: 70 },
  { name: "Tailwind CSS", logo: "/tailwindcss.jpg", proficiency: 80 },
];
export default function About() {
  return (
    <main>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <h1 id={styles.div3}>About Me</h1>

          <section className={styles.div4}>
            <div className={styles.div5}>
              <h2 id={styles.div6}>Who I Am</h2>
              <p className={styles.div6}>
                Hi! {`I’m`} Iraj Fatima, a passionate web developer. I have a
                passion for creating beautiful, user-friendly websites that
                provide an excellent user experience. Whether {`it's`} a personal
                blog or a corporate website, I love bringing ideas to life
                through code.
              </p>
            </div>
          </section>

          <section className={styles.div7}>
            <div className={styles.div8}>
              <h2 id={styles.div9}>My Journey</h2>
              <p className={styles.div10}>
                My journey began in 2023 when I discovered coding while working
                on a personal project. Intrigued by the possibilities of web
                development, I enrolled in a boot camp where I honed my skills
                in HTML, CSS, and JavaScript. Since then, I have worked on
                various projects, from small startups to larger enterprise
                applications, always striving to learn and grow in my field.
              </p>
            </div>
          </section>

          <section className={styles.div11}>
            <div className={styles.div12}>
              <h2 id={styles.div13}>What I Do</h2>
              <p className={styles.div14}>
                I specialize in front-end development, with a focus on React and
                Next.js. My goal is to help clients achieve their visions
                through clean code and intuitive design. I believe in a
                collaborative approach, working closely with clients to ensure
                their ideas are realized while providing insights and
                suggestions for improvement.
              </p>
            </div>
          </section>

          <section className={styles.div15}>
            <div className={styles.div16}>
              <div className={styles.div17}>
                <h1 className={styles.div18}>My Skills</h1>
                <section className={styles.div19}>
                  <div className={styles.div20}>
                    {skillsData.map((skill) => (
                      <div key={skill.name} className={styles.div21}>
                        <div className={styles.div22}>
                          <div className={styles.div23}>
                            <Image
                              src={skill.logo}
                              alt={`${skill.name} logo`}
                              width={100}
                              height={100}
                              className={styles.div0}
                            />
                            <span className={styles.div24}>{skill.name}</span>
                          </div>
                        </div>
                        <div className={styles.div25}>
                          <div
                            className={styles.div26}
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </section>
          <section className={styles.div27}>
            <div className={styles.div28}>
              <h2 id={styles.div29}>{`Let’s`} Connect</h2>
              <p className={styles.div30}>
                {`I’m`} always open to new opportunities and collaborations. If
                {`you’d`} like to work together or just want to say hi, feel free to
                reach out via email at abc@gmail.com.{`Let’s`} create something
                amazing together!
              </p>
              <div className={styles.div31}>
                <Link href="/contact">
                  <button className={styles.div32}>Contact me</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

