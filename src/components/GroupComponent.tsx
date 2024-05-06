import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  image12?: string;
  saloonCar?: string;
  prop?: string;
  reviews?: string;
  passagers?: string;
  doors?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  image12,
  saloonCar,
  prop,
  reviews,
  passagers,
  doors,
  propMinWidth,
  propPadding,
  propHeight,
  propMinWidth1,
  propDisplay,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const carImagesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image12IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const saloonCarStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  return (
    <div className={styles.carImageWrapperWrapper} style={groupDivStyle}>
      <div className={styles.carImageWrapper}>
        <div className={styles.carImages} style={carImagesStyle}>
          <div className={styles.carImagesChild} />
          <img
            className={styles.image12Icon}
            loading="lazy"
            alt=""
            src={image12}
            style={image12IconStyle}
          />
        </div>
        <div className={styles.carDetailsWrapper}>
          <div className={styles.carFeaturesParent}>
            <div className={styles.carFeatures}>
              <div className={styles.carTypeRow}>
                <div className={styles.saloonCar} style={saloonCarStyle}>
                  {saloonCar}
                </div>
                <div className={styles.carReviewRow}>
                  <img
                    className={styles.ratingStarsIcon}
                    alt=""
                    src="/rating-stars.svg"
                  />
                  <div className={styles.reviews}>
                    <span>
                      <span className={styles.span}>{prop}</span>
                    </span>
                    <span className={styles.reviews1}>
                      <span>{` `}</span>
                      <span>{reviews}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.carCapacityWrapper}>
                <div className={styles.capacityRowParent}>
                  <div className={styles.capacityRow}>
                    <img
                      className={styles.vuesaxlinearuserIcon}
                      alt=""
                      src="/vuesaxlinearuser.svg"
                    />
                    <div className={styles.passagers}>{passagers}</div>
                  </div>
                  <div className={styles.transmissionRow}>
                    <img
                      className={styles.transmissionIcon}
                      alt=""
                      src="/frame-1.svg"
                    />
                    <div className={styles.auto}>Auto</div>
                  </div>
                </div>
                <div className={styles.airConditioningWrapper}>
                  <div className={styles.airConditioningIconParent}>
                    <img
                      className={styles.airConditioningIcon}
                      alt=""
                      src="/frame-2.svg"
                    />
                    <div className={styles.airConditioning}>
                      Air Conditioning
                    </div>
                  </div>
                  <div className={styles.doorsWrapper}>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame-3.svg"
                    />
                    <div className={styles.doors}>{doors}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.rentButtonWrapper}>
              <div className={styles.rentNowWrapper}>
                <div className={styles.rentNow}>Rent Now</div>
              </div>
              <img
                className={styles.vuesaxlineararrowRightIcon}
                alt=""
                src="/vuesaxlineararrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
