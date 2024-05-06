import { FunctionComponent } from "react";
import CustomerReviews from "./CustomerReviews";
import styles from "./WhatPeopleSay.module.css";

const WhatPeopleSay: FunctionComponent = () => {
  return (
    <section className={styles.whatPeopleSay}>
      <div className={styles.quotesWrapper}>
        <img className={styles.icon} alt="" src="/.svg" />
        <img className={styles.icon1} alt="" src="/-1.svg" />
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialHeader}>
            <div className={styles.testimonialTitle}>
              <div className={styles.testimonials}>TESTIMONIALS</div>
            </div>
            <h1 className={styles.whatPeoleSay}>What peole say about us?</h1>
          </div>
          <div className={styles.customerReviewsParent}>
            <CustomerReviews
              iHaveBeenUsingYourService="“I have been using your services for 3 years. Your service is great, I will continue to use your service.”"
              jennyWilson="Jenny Wilson"
              img="/rectangle-8@2x.png"

            />
            <CustomerReviews
              iHaveBeenUsingYourService="“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
              jennyWilson="Charlie Johnson"
              propWidth="unset"
              propAlignSelf="unset"
              propGap="66px"
              propHeight="unset"
              propDisplay="unset"
              propWidth1="unset"
              propAlignSelf1="unset"
              propWidth2="unset"
              propMinWidth="127px"
              img="/rectangle-8@2x.png"
            />
            <CustomerReviews
              iHaveBeenUsingYourService="“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”"
              jennyWilson="Charlie Johnson"
              propWidth="unset"
              propAlignSelf="unset"
              propGap="66px"
              propHeight="unset"
              propDisplay="unset"
              propWidth1="unset"
              propAlignSelf1="unset"
              propWidth2="unset"
              propMinWidth="127px"
              img="/rectangle-8-2@2x.png"
            />
            {/* <div className={styles.customerReviews}>
              <img
                className={styles.customerReviewsChild}
                alt=""
                src="/rectangle-8-2@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.starsParent}>
                  <div className={styles.stars}>
                    <span>5.0</span>
                    <span className={styles.stars1}> stars</span>
                  </div>
                  <div className={styles.starParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/star-1-7.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/star-1-7.svg"
                    />
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="/star-1-7.svg"
                    />
                    <img
                      className={styles.starIcon}
                      alt=""
                      src="/star-1-7.svg"
                    />
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/star-1-7.svg"
                    />
                  </div>
                </div>
                <div className={styles.iFeelVerySecureWhenUsingParent}>
                  <h3 className={styles.iFeelVery}>
                    “I feel very secure when using caretall's services. Your
                    customer care team is very enthusiastic and the driver is
                    always on time.”
                  </h3>
                  <div className={styles.charlieJohnsonParent}>
                    <h1 className={styles.charlieJohnson}>Charlie Johnson</h1>
                    <div className={styles.fromNewYork}>From New York, US</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
