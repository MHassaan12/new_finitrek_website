import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./HowItWork.module.css";

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
              Rent with following 3 working steps
            </h1>
          </div>
          <div className={styles.instanceParent}>
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldlocationtick.svg"
              bookYourCar="Choose location"
              chooseYourAndFind="Choose your and find"
              yourBestCar="your best car"
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcalendar.svg"
              bookYourCar="Pick-up date"
              chooseYourAndFind="Select your pick up date and"
              yourBestCar="time to book your car"
            />
            <FrameComponent
              vuesaxboldlocationTick="/vuesaxboldcar.svg"
              bookYourCar="Book your car"
              chooseYourAndFind="Book your car and we will deliver"
              yourBestCar="it directly to you"
            />
          </div>
        </div>
        <img
          className={styles.images1Icon}
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
        />
      </div>
    </section>
  );
};

export default HowItWork;
