import { useEffect } from "react";
import styles from "./ProductsCard.module.css";

const ProductsCard = () => {
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
    <div
      className={styles.products}
      data-scroll-to="productsContainer"
      data-animate-on-scroll
    >
      <div className={styles.outerColumnFrame1}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-1-10@2x.png" />
          </div>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-6-1@2x.png" />
          </div>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-11-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame2}>
        <div className={styles.innerColumnFrame2}>
          <div className={styles.rug2}>
            <img className={styles.rug210} alt="" src="/rug-2-10@2x.png" />
          </div>
          <div className={styles.rug2}>
            <img className={styles.rug210} alt="" src="/rug-7-1@2x.png" />
          </div>
          <div className={styles.rug2}>
            <img className={styles.rug210} alt="" src="/rug-12-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame3}>
        <b className={styles.productsTitle}>products</b>
        <div className={styles.innerColumnFrame3}>
          <div className={styles.rug3}>
            <img className={styles.rug210} alt="" src="/rug-3-2@2x.png" />
          </div>
          <div className={styles.rug3}>
            <img className={styles.rug210} alt="" src="/rug-8-1@2x.png" />
          </div>
          <div className={styles.rug3}>
            <img className={styles.rug210} alt="" src="/rug-13-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame2}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-4-1@2x.png" />
          </div>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-9-1@2x.png" />
          </div>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-14-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame5}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-5-1@2x.png" />
          </div>
          <div className={styles.rug1}>
            <img className={styles.rug110} alt="" src="/rug-10-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
