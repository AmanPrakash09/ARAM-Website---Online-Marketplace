import { useState, useCallback, useEffect } from "react";
import DrawerMenu from "./DrawerMenu";
import PortalDrawer from "./PortalDrawer";
import styles from "./NavigationBar.module.css";

const NavigationBar = ({ user }) => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const onButtonClick = useCallback((sectionId) => {
    const anchor = document.querySelector(`[data-scroll-to='${sectionId}']`);
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  const accountHandleClick = () => {
    const string = user ? "/account" : "/login";
    window.location.href = string;
  };

  return (
    <>
      <nav className={styles.navigationBar} data-animate-on-scroll>
        <div className={styles.navbar}>
          <div className={styles.logoAndName}>
            <button className={styles.navigationLogo} />
            <button className={styles.aRam}>A-RAM</button>
          </div>
          <div className={styles.menu}>
            <section className={styles.horizontalList}>
              <button className={styles.link} onClick={() => onButtonClick('productsContainer')}>products</button>
              <button className={styles.link} onClick={() => onButtonClick('aboutContainer')}>about</button>
              <button className={styles.shopify}>shopify</button>
              <button className={styles.link} onClick={() => onButtonClick('footer')}>contact us</button>
              <span className={styles.link} onClick={accountHandleClick}>account</span>
            </section>
            <button className={styles.menu1} onClick={openDrawerMenu} />
          </div>
        </div>
      </nav>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavigationBar;
