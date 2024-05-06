import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CustomerReviews.module.css";

export type CustomerReviewsType = {
  iHaveBeenUsingYourService?: string;
  jennyWilson?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  img: string;
};

const CustomerReviews: FunctionComponent<CustomerReviewsType> = ({
  iHaveBeenUsingYourService,
  jennyWilson,
  propWidth,
  propAlignSelf,
  propGap,
  propHeight,
  propDisplay,
  propWidth1,
  propAlignSelf1,
  propWidth2,
  propMinWidth,
  img
}) => {
  const reviewRowStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const starsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const iHaveBeenStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const testimonialAuthorStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const jennyWilsonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const fromNewYorkStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth,
    };
  }, [propWidth2, propMinWidth]);

  return (
    <div className={styles.customerReviews}>
      <img
        className={styles.customerReviewsChild}
        loading="lazy"
        alt=""
        src={img}
      />
      <div className={styles.customerReviewWrapper}>
        <div className={styles.reviewRow} style={reviewRowStyle}>
          <div className={styles.stars} style={starsStyle}>
            <span>5.0</span>
            <span className={styles.stars1}> stars</span>
          </div>
          <div className={styles.starsWrapper}>
            <img className={styles.filledStarIcon} alt="" src="/star-1-7.svg" />
            <img
              className={styles.filledStarIcon1}
              alt=""
              src="/star-1-7.svg"
            />
            <img
              className={styles.filledStarIcon2}
              alt=""
              src="/star-1-7.svg"
            />
            <img
              className={styles.filledStarIcon3}
              alt=""
              src="/star-1-7.svg"
            />
            <img
              className={styles.filledStarIcon4}
              alt=""
              src="/star-1-7.svg"
            />
          </div>
        </div>
        <div
          className={styles.iHaveBeenUsingYourServiceParent}
          style={frameDivStyle}
        >
          <h3 className={styles.iHaveBeen} style={iHaveBeenStyle}>
            {iHaveBeenUsingYourService}
          </h3>
          <div
            className={styles.testimonialAuthor}
            style={testimonialAuthorStyle}
          >
            <h1 className={styles.jennyWilson} style={jennyWilsonStyle}>
              {jennyWilson}
            </h1>
            <div className={styles.fromNewYork} style={fromNewYorkStyle}>
              From New York, US
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
