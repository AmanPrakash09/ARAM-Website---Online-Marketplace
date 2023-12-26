import { useMemo } from "react";
import styles from "./StateDefault1.module.css";

const StateDefault1 = ({
  stateDefaultCursor,
  stateDefaultBorder,
  stateDefaultBackgroundColor,
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
  stateDefaultFlexShrink,
  aboutCursor,
  aboutBorder,
  aboutPadding,
  aboutBackgroundColor,
  aboutColor,
  aboutDisplay,
  onAboutButtonClick,
}) => {
  const stateDefault2Style = useMemo(() => {
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

  const aboutStyle = useMemo(() => {
    return {
      cursor: aboutCursor,
      border: aboutBorder,
      padding: aboutPadding,
      backgroundColor: aboutBackgroundColor,
      color: aboutColor,
      display: aboutDisplay,
    };
  }, [
    aboutCursor,
    aboutBorder,
    aboutPadding,
    aboutBackgroundColor,
    aboutColor,
    aboutDisplay,
  ]);

  return (
    <div
      className={styles.statedefault}
      style={stateDefault2Style}
      onClick={onAboutButtonClick}
    >
      <button className={styles.about} style={aboutStyle}>
        about
      </button>
    </div>
  );
};

export default StateDefault1;
