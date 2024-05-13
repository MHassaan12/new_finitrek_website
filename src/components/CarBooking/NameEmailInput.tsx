import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../Assets/css/NameEmailInput.module.css";

export type NameEmailInputType = {
  name1?: string;
  contactNumber?: string;
  flightNumber?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const NameEmailInput: FunctionComponent<NameEmailInputType> = ({
  name1,
  contactNumber,
  flightNumber,
  propMinWidth,
  propWidth,
}) => {
  const contactNumberStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const flightInfoInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.nameEmailInput}>
      <div className={styles.locationInputRepeat}>
        <div className={styles.contactDetailsLabels}>
          <div className={styles.name}>{name1}</div>
        </div>
        <div className={styles.pickupLocationInput}>
          <div className={styles.enterPickUp}>Enter Pick Up Location</div>
        </div>
      </div>
      <div className={styles.contactInfoInput}>
        <div className={styles.additionalContactDetails}>
          <div className={styles.contactNumber} style={contactNumberStyle}>
            {contactNumber}
          </div>
        </div>
        <div className={styles.dropoffLocationRepeat}>
          <div className={styles.enterDropLocation}>Enter Drop Location</div>
        </div>
      </div>
      <div className={styles.flightDetailsInput}>
        <div className={styles.flightInfoInput} style={flightInfoInputStyle}>
          <div className={styles.flightNumber}>{flightNumber}</div>
        </div>
        <div className={styles.enterDropLocationWrapper}>
          <div className={styles.enterDropLocation1}>Enter Drop Location</div>
        </div>
      </div>
    </div>
  );
};

export default NameEmailInput;
