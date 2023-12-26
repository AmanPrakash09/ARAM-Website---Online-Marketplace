import { useMemo } from "react";
import styles from "./StateDefault.module.css";

const StateDefault = ({
  stateDefaultCursor,
  stateDefaultBorder,
  stateDefaultBackgroundColor,
  stateDefaultFlexShrink,
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
  contactUsCursor,
  contactUsBorder,
  contactUsPadding,
  contactUsBackgroundColor,
  contactUsDisplay,
  contactUsColor,
  onContactButtonClick,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      cursor: stateDefaultCursor,
      border: stateDefaultBorder,
      backgroundColor: stateDefaultBackgroundColor,
      flexShrink: stateDefaultFlexShrink,
      position: stateDefaultPosition,
      top: stateDefaultTop,
      left: stateDefaultLeft,
    };
  }, [
    stateDefaultCursor,
    stateDefaultBorder,
    stateDefaultBackgroundColor,
    stateDefaultFlexShrink,
    stateDefaultPosition,
    stateDefaultTop,
    stateDefaultLeft,
  ]);

  const contactUsStyle = useMemo(() => {
    return {
      cursor: contactUsCursor,
      border: contactUsBorder,
      padding: contactUsPadding,
      backgroundColor: contactUsBackgroundColor,
      display: contactUsDisplay,
      color: contactUsColor,
    };
  }, [
    contactUsCursor,
    contactUsBorder,
    contactUsPadding,
    contactUsBackgroundColor,
    contactUsDisplay,
    contactUsColor,
  ]);

  return (
    <div
      className={styles.statedefault}
      style={stateDefaultStyle}
      onClick={onContactButtonClick}
    >
      <button className={styles.contactUs} style={contactUsStyle}>
        contact us
      </button>
    </div>
  );
};

export default StateDefault;
