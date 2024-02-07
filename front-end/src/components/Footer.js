import { useEffect } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <footer
      className={styles.footer}
      data-scroll-to="footer"
      data-animate-on-scroll
    >
      <div className={styles.titleFrame}>
        <b className={styles.contactTitle}>contact us</b>
      </div>
      <div className={styles.outerFrame}>
        <div className={styles.innerFrame}>
          <a className={styles.telephone} href="tel:+17788466911" target="_blank"/>
          <a className={styles.phoneText} href="tel:+17788466911" target="_blank">
            +1 (778) 846-6911
          </a>
          <a className={styles.email} href="mailto:rohitprakash11@gmail.com" target="_blank"/>
          <a
            className={styles.emailText}
            href="mailto:rohitprakash11@gmail.com"
            target="_blank"
          >{`rohitprakash11@gmail.com `}</a>
          <a
            className={styles.linkedin}
            href="https://www.linkedin.com/in/rohit-prakash-cpa-cma/"
            target="_blank"
          />
          <a
            className={styles.linkedinText}
            href="https://www.linkedin.com/in/rohit-prakash-cpa-cma/"
            target="_blank"
          >
            Rohit Prakash
          </a>          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
