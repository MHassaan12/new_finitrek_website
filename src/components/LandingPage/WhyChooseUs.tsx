import { FunctionComponent } from "react";
import Experience from "../Common/Experience";
import styles from "../../Assets/css/WhyChooseUs.module.css";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className={styles.whyChooseUs}>
      <img
          className={styles.images1Icon}
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
        />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.whyChooseUsWrapper}>
            <div className={styles.whyChooseUs1}>WHY CHOOSE US</div>
          </div>
          <h1 className={styles.weOfferThe}>
            We offer the best experience with our rental deals
          </h1>
        </div>
        <div className={styles.bestPriceParent}>
          <div className={styles.bestPrice}>
            <div className={styles.iconCarParent}>
              <div className={styles.iconCar}>
                <img
                  className={styles.vuesaxboldwalletIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxboldwallet.svg"
                />
              </div>
              <div className={styles.bookYourCarParent}>
                <div className={styles.bookYourCar}>Pick-up date</div>
                <div className={styles.bookYourCarContainer}>
                  <p className={styles.selectYourPick}>
                    Select your pick up date and
                  </p>
                  <p className={styles.timeToBook}>time to book your car</p>
                </div>
              </div>
            </div>
            <div className={styles.priceDetails}>
              <h2 className={styles.bestPriceGuaranteed}>
                Best price guaranteed
              </h2>
              <div className={styles.findALowerContainer}>
                <p className={styles.findALower}>
                  Find a lower price? We’ll refund you 100%
                </p>
                <p className={styles.ofTheDifference}>of the difference.</p>
              </div>
            </div>
          </div>
          <Experience
            vuesaxbolduserTick="/vuesaxboldusertick.svg"
            experienceDriver="Experience driver"
            dontHaveDriverDontWorryWe="Don’t have driver? Don’t worry, we have many"
            experiencedDriverForYou="experienced driver for you."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxbold24support.svg"
            experienceDriver="24 hour car delivery"
            dontHaveDriverDontWorryWe="Book your car anytime and we will deliver it"
            experiencedDriverForYou="directly to you."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldmessages2.svg"
            experienceDriver="24/7 technical support"
            dontHaveDriverDontWorryWe="Have a question? Contact Rentcars support"
            experiencedDriverForYou="any time when you have problem."
          />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.audi1Icon}
          loading="lazy"
          alt=""
          src="/audi-1@2x.png"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
