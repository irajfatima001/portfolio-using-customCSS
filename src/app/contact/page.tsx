import React from "react";
import styles from "../components/Contact.module.css";
import Image from "next/image"; 



const Contact = () => {
  return (
    <div className={styles.c1}>
      <div className={styles.c2}>
        <h1 className={styles.c3}>Get in Touch</h1>
        <p className={styles.c4}>
          Whether you have a question, a collaboration idea, or just want to say
          hello, feel free to reach out!
        </p>
      </div>
      <div className={styles.c5}>
        <div className={styles.c0}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.c0}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.formInput}
          />
        </div>
        <div className={styles.c0}>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className={styles.formInput}
          ></textarea>
        </div>
        <button className={styles.c6}>Send Message</button>
      </div>
      <div className={styles.socialLinksContainer}>
        <h3 className={styles.socialHeading}>Connect with Me</h3>
        <div className={styles.socialLinks}>
          <a href="" target="_blank" className={styles.socialLink}>
          <Image
                src="/s7.jpg"
                alt="p2"
                width={35}
                height={35}
                className={styles.i1}/>
          </a>
          <a href="" target="_blank" className={styles.socialLink}>
          <Image
                src="/s8.jpg"
                alt="p2"
                width={35}
                height={35}
                className={styles.i1}/>
          </a>
          <a href="" className={styles.socialLink}>
          <Image
                src="/s5.jpg"
                alt="p2"
                width={35}
                height={35}
                className={styles.i1}/> 
          </a>
          <a href="" target="_blank" className={styles.socialLink}>
          <Image
                src="/s9.jpg"
                alt="p2"
                width={35}
                height={35}
                className={styles.i1}/> 
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
