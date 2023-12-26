import { useState, useCallback, useEffect } from "react";
import StateDefault2 from "./StateDefault2";
import StateDefault1 from "./StateDefault1";
import StateDefault from "./StateDefault";
import DrawerMenu from "./DrawerMenu";
import PortalDrawer from "./PortalDrawer";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const onProductsButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='productsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
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
              <StateDefault2
                stateDefaultCursor="pointer"
                stateDefaultBorder="none"
                stateDefaultBackgroundColor="transparent"
                stateDefaultPosition="unset"
                stateDefaultTop="unset"
                stateDefaultLeft="unset"
                stateDefaultFlexShrink="0"
                productsCursor="unset"
                productsBorder="unset"
                productsPadding="unset"
                productsBackgroundColor="unset"
                productsColor="#fff"
                productsDisplay="inline-block"
                onProductsButtonClick={onProductsButtonClick}
              />
              <StateDefault1
                stateDefaultCursor="pointer"
                stateDefaultBorder="none"
                stateDefaultBackgroundColor="transparent"
                stateDefaultPosition="unset"
                stateDefaultTop="unset"
                stateDefaultLeft="unset"
                stateDefaultFlexShrink="0"
                aboutCursor="unset"
                aboutBorder="unset"
                aboutPadding="unset"
                aboutBackgroundColor="unset"
                aboutColor="#fff"
                aboutDisplay="inline-block"
                onAboutButtonClick={onAboutButtonClick}
              />
              <button className={styles.shopify}>shopify</button>
              <StateDefault
                stateDefaultCursor="pointer"
                stateDefaultBorder="none"
                stateDefaultBackgroundColor="transparent"
                stateDefaultFlexShrink="0"
                stateDefaultPosition="unset"
                stateDefaultTop="unset"
                stateDefaultLeft="unset"
                contactUsCursor="unset"
                contactUsBorder="unset"
                contactUsPadding="unset"
                contactUsBackgroundColor="unset"
                contactUsDisplay="inline-block"
                contactUsColor="#fff"
                onContactButtonClick={onContactButtonClick}
              />
              <button className={styles.shopify}>account</button>
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
