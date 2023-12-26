import { useCallback, useEffect } from "react";
import StateDefault2 from "./StateDefault2";
import StateDefault1 from "./StateDefault1";
import StateDefault from "./StateDefault";
import styles from "./DrawerMenu.module.css";

const DrawerMenu = ({ onClose }) => {
  const onProductsButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='productsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  const onAboutButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
  }, []);

  const onContactButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    onClose && onClose();
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
  return (
    <div className={styles.drawerMenu} data-animate-on-scroll>
      <StateDefault2
        stateDefaultCursor="pointer"
        stateDefaultBorder="none"
        stateDefaultBackgroundColor="transparent"
        stateDefaultPosition="absolute"
        stateDefaultTop="48px"
        stateDefaultLeft="38px"
        stateDefaultFlexShrink="unset"
        productsCursor="unset"
        productsBorder="unset"
        productsPadding="unset"
        productsBackgroundColor="unset"
        productsColor="#0c356a"
        productsDisplay="inline-block"
        onProductsButtonClick={onProductsButtonClick}
      />
      <StateDefault1
        stateDefaultCursor="pointer"
        stateDefaultBorder="none"
        stateDefaultBackgroundColor="transparent"
        stateDefaultPosition="absolute"
        stateDefaultTop="145px"
        stateDefaultLeft="38px"
        stateDefaultFlexShrink="unset"
        aboutCursor="unset"
        aboutBorder="unset"
        aboutPadding="unset"
        aboutBackgroundColor="unset"
        aboutColor="#0c356a"
        aboutDisplay="inline-block"
        onAboutButtonClick={onAboutButtonClick}
      />
      <button className={styles.shopify}>shopify</button>
      <StateDefault
        stateDefaultCursor="pointer"
        stateDefaultBorder="none"
        stateDefaultBackgroundColor="transparent"
        stateDefaultFlexShrink="unset"
        stateDefaultPosition="absolute"
        stateDefaultTop="317px"
        stateDefaultLeft="38px"
        contactUsCursor="unset"
        contactUsBorder="unset"
        contactUsPadding="unset"
        contactUsBackgroundColor="unset"
        contactUsDisplay="inline-block"
        contactUsColor="#0c356a"
        onContactButtonClick={onContactButtonClick}
      />
      <button className={styles.account}>account</button>
    </div>
  );
};

export default DrawerMenu;
