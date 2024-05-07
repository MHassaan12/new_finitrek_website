import { FunctionComponent } from "react";
import styles from "../../Assets/css/FrameComponent.module.css";

export type FrameComponentType = {
  vuesaxboldlocationTick?: string;
  bookYourCar?: string;
  chooseYourAndFind?: string;
  yourBestCar?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  vuesaxboldlocationTick,
  bookYourCar,
  chooseYourAndFind,
  yourBestCar,
}) => {
  return (
    <div className={styles.iconCarParent}>
      <div className={styles.iconCar}>
        <img
          className={styles.vuesaxboldlocationTickIcon}
          loading="lazy"
          alt=""
          src={vuesaxboldlocationTick}
        />
      </div>
      <div className={styles.registrationConfirmation}>
        <h2 className={styles.bookYourCar}>{bookYourCar}</h2>
        <div className={styles.bookYourCarContainer}>
          <p className={styles.chooseYourAnd}>{chooseYourAndFind}</p>
          <p className={styles.yourBestCar}>{yourBestCar}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
