import { useCallback, useEffect } from "react";
import styles from "./DrawerMenu.module.css";

const DrawerMenu = ({ onClose }) => {
  const handleClick = useCallback((sectionId) => {
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
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
    <div className={`${styles.drawerMenu} ${styles.animate}`} data-animate-on-scroll>
      <button className={styles.shopify} onClick={() => handleClick("productsContainer")}>
        products
      </button>
      <button className={styles.about} onClick={() => handleClick("aboutContainer")}>
        about
      </button>
      <button className={styles.shopify}>shopify</button>
      <button className={styles.contactUs} onClick={() => handleClick("footer")}>
        contact Us
      </button>
      <button className={styles.account}>account</button>
    </div>
  );
};

export default DrawerMenu;
