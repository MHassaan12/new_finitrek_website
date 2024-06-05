import { FunctionComponent } from "react";
import Experience from "../Common/Experience";
import styles from "../../Assets/css/WhyChooseUs.module.css";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className={styles.whyChooseUs}>

      <div className={styles.frameParent}>
          <div className={styles.whyChooseUsWrapper}>
            <div className={styles.whyChooseUs1}>Why choose Finitrek</div>
          </div>
        <div className={styles.frameGroup}>
          <h1 className={styles.weOfferThe}>
            We offer the best experience with our drive
          </h1>
        </div>
        <div className={styles.bestPriceParent}>
          {/* <div className={styles.bestPrice}>
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
        </div> */}
          <Experience
            vuesaxbolduserTick="/vuesaxboldwallet.svg"
            experienceDriver="Save Money"
            dontHaveDriverDontWorryWe="By comparing multiple providers, you can"
            experiencedDriverForYou="find the most cost-effective option for your journey."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldusertick.svg"
            experienceDriver="Save Time"
            dontHaveDriverDontWorryWe="Our quick and easy comparison tool saves"
            experiencedDriverForYou="you the hassle of checking multiple websites."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldusertick.svg"
            experienceDriver="Book with Confidence"
            dontHaveDriverDontWorryWe="With real customer reviews and ratings, "
            experiencedDriverForYou="you can trust that you're making the best choice."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxbold24support.svg"
            experienceDriver="Wide Selection"
            dontHaveDriverDontWorryWe="Access a vast network of taxi providers, offering a variety "
            experiencedDriverForYou="of vehicle types and services to suit all your travel needs."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxbold24support.svg"
            experienceDriver="Reliable Service"
            dontHaveDriverDontWorryWe="Our platform partners only with reputable taxi companies, "
            experiencedDriverForYou="ensuring you receive a reliable and professional service every time."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxbold24support.svg"
            experienceDriver="Transparent Pricing"
            dontHaveDriverDontWorryWe="No hidden fees or surprises."
            experiencedDriverForYou="See the full cost upfront before you book."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldmessages2.svg"
            experienceDriver="24/7 Support"
            dontHaveDriverDontWorryWe="Need assistance? Our customer support team is"
            experiencedDriverForYou=" available around the clock to help with any queries or issues."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldmessages2.svg"
            experienceDriver="Convenient Booking"
            dontHaveDriverDontWorryWe="Book your ride in advance or on-demand with just a few clicks,"
            experiencedDriverForYou="all from the comfort of your home or on the go."
          />
          <Experience
            vuesaxbolduserTick="/vuesaxboldmessages2.svg"
            experienceDriver="Eco-Friendly Options"
            dontHaveDriverDontWorryWe="Choose from a range of eco-friendly vehicles to reduce"
            experiencedDriverForYou="your carbon footprint and travel sustainably."
          />
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
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
