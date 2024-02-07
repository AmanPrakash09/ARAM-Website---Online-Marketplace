import { useState, useEffect } from "react";
import styles from "./ProductsCard.module.css";
import axios from "axios";

const ProductsCard = ({ user }) => {

  const [showPopup, setShowPopup] = useState(false);

  const saveRug = async (rugName) => {
    if (!user) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
      
      const object = {
        user_id: user.displayName + user.id,
        rug_name: rugName,
      }
      try {
          await axios.post("https://marketplace.a-ramcreatives.com/saveItem", object)
      } catch (err) {
          console.log(err)
      }
    }
  };

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
    <div className={styles.products} data-scroll-to="productsContainer" data-animate-on-scroll>
      <div className={styles.outerColumnFrame1}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1} onClick={() => saveRug("rug1")}>
            <img className={styles.rug110} alt="" src="/rug-1-10@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug6")}>
            <img className={styles.rug110} alt="" src="/rug-6-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug11")}>
            <img className={styles.rug110} alt="" src="/rug-11-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame1}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1} onClick={() => saveRug("rug2")}>
            <img className={styles.rug110} alt="" src="/rug-2-10@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug7")}>
            <img className={styles.rug110} alt="" src="/rug-7-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug12")}>
            <img className={styles.rug110} alt="" src="/rug-12-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame1}>
        <div className={styles.productsTitleContainer}>
          <b className={styles.productsTitle}>products</b>
        </div>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1} onClick={() => saveRug("rug3")}>
            <img className={styles.rug110} alt="" src="/rug-3-2@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug8")}>
            <img className={styles.rug110} alt="" src="/rug-8-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug13")}>
            <img className={styles.rug110} alt="" src="/rug-13-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame1}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1} onClick={() => saveRug("rug4")}>
            <img className={styles.rug110} alt="" src="/rug-4-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug13")}>
            <img className={styles.rug110} alt="" src="/rug-9-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug14")}>
            <img className={styles.rug110} alt="" src="/rug-14-1@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.outerColumnFrame5}>
        <div className={styles.innerColumnFrame1}>
          <div className={styles.rug1} onClick={() => saveRug("rug5")}>
            <img className={styles.rug110} alt="" src="/rug-5-1@2x.png" />
          </div>
          <div className={styles.rug1} onClick={() => saveRug("rug10")}>
            <img className={styles.rug110} alt="" src="/rug-10-1@2x.png" />
          </div>
        </div>
      </div>

      {showPopup && (
        <div className={`${styles.popup} ${showPopup ? styles.popupVisible : ""}`}>
          <p>You must sign in to save a rug to your collection.</p>
          <button className={styles.closeButton} onClick={() => setShowPopup(false)}>
            &#x2715; {/* Unicode character for 'X' */}
          </button>
      </div>
      )}

    </div>
  );
};

export default ProductsCard;
