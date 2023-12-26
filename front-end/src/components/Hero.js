import { useEffect } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
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
    <header className={styles.hero}>
      <div className={styles.yellowBlur} />
      <p className={styles.regularHeroText} data-animate-on-scroll>
        craft that promotes relaxation
      </p>
      <img
        className={styles.heroLogoIcon}
        alt=""
        src="/hero-logo@2x.png"
        data-animate-on-scroll
      />
      <h1 className={styles.boldHeroText} data-animate-on-scroll>
        explore India’s rich and deep-rooted heritage
      </h1>
    </header>
  );
};

export default Hero;
