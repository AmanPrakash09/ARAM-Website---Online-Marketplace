import { useMemo } from "react";
import styles from "./StateDefault2.module.css";

const StateDefault2 = ({
  stateDefaultCursor,
  stateDefaultBorder,
  stateDefaultBackgroundColor,
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
  stateDefaultFlexShrink,
  productsCursor,
  productsBorder,
  productsPadding,
  productsBackgroundColor,
  productsColor,
  productsDisplay,
  onProductsButtonClick,
}) => {
  const stateDefault1Style = useMemo(() => {
    return {
      cursor: stateDefaultCursor,
      border: stateDefaultBorder,
      backgroundColor: stateDefaultBackgroundColor,
      position: stateDefaultPosition,
      top: stateDefaultTop,
      left: stateDefaultLeft,
      flexShrink: stateDefaultFlexShrink,
    };
  }, [
    stateDefaultCursor,
    stateDefaultBorder,
    stateDefaultBackgroundColor,
    stateDefaultPosition,
    stateDefaultTop,
    stateDefaultLeft,
    stateDefaultFlexShrink,
  ]);

  const productsStyle = useMemo(() => {
    return {
      cursor: productsCursor,
      border: productsBorder,
      padding: productsPadding,
      backgroundColor: productsBackgroundColor,
      color: productsColor,
      display: productsDisplay,
    };
  }, [
    productsCursor,
    productsBorder,
    productsPadding,
    productsBackgroundColor,
    productsColor,
    productsDisplay,
  ]);

  return (
    <div
      className={styles.statedefault}
      style={stateDefault1Style}
      onClick={onProductsButtonClick}
    >
      <button className={styles.products} style={productsStyle}>
        products
      </button>
    </div>
  );
};

export default StateDefault2;
