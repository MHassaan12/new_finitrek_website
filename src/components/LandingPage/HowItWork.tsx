import { FunctionComponent } from "react";
import FrameComponent from "../Common/FrameComponent";
import styles from "../../Assets/css/HowItWork.module.css";

const HowItWork: FunctionComponent = () => {
  return (
    <section className={styles.howItWork}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.howItWorkWrapper}>
              <div className={styles.howItWork1}>HOW IT WORK</div>
            </div>
            <h1 className={styles.rentWithFollowing}>
              Book you taxi in 3 simple steps
            </h1>
          </div>
          <div className={styles.instanceParent}>
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcalendar.svg"
              bookYourCar="Enter you journey details"
              chooseYourAndFind="Choose your and find"
              yourBestCar="your best car"
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldlocationtick.svg"
              bookYourCar="Choose your suitable provider and car"
              chooseYourAndFind="Select your pick up date and"
              yourBestCar="time to book your car"
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcar.svg"
              bookYourCar="Pay for the journey and all set!"
              chooseYourAndFind="Book your car and we will deliver"
              yourBestCar="it directly to you"
            />
          </div>
        </div>
        {/* <img
          className={styles.images1Icon}
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
        /> */}
      </div>
    </section>
  );
};

export default HowItWork;
