import { useCallback } from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import ProductsCard from "../components/ProductsCard";
import AboutContainer from "../components/AboutContainer";
import Footer from "../components/Footer";
import styles from "./MainPage.module.css";

const MainPage = () => {
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

  return (
    <div className={styles.mainPage}>
      <NavigationBar />
      <Hero />
      <ProductsCard />
      <AboutContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
