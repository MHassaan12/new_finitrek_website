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
            Ride Smart with following 3 working steps
            </h1>
          </div>
          <div className={styles.instanceParent}>
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldlocationtick.svg"
              bookYourCar="Choose location"
              chooseYourAndFind="Enter you journey details"
              yourBestCar=""
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcalendar.svg"
              bookYourCar="Pick-up car"
              chooseYourAndFind="Choose your suitable provider and car."
              yourBestCar=""
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcar.svg"
              bookYourCar="Payment"
              chooseYourAndFind="Pay for the journey and all set!"
              yourBestCar=""
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
