import { FunctionComponent } from "react";
import GroupComponent from "../Common/GroupComponent";
import styles from "../../Assets/css/PopularRentalCars.module.css";

const PopularRentalCars: FunctionComponent = () => {
  return (
    <section className={styles.popularRentalCars}>
      <div className={styles.popularCarsHeader}>
        <div className={styles.popularCarsTitle}>
          <div className={styles.dealsTitle}>
            <div className={styles.rentalDeals}>
              <div className={styles.popularRentalDeals}>
                POPULAR RENTAL DEALS
              </div>
            </div>
          </div>
          <h1 className={styles.mostPopularCars}>
            Most popular cars rental deals
          </h1>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <GroupComponent
            image12="/image-12@2x.png"
            saloonCar="Saloon Car"
            prop="4.8"
            reviews="(2.436 reviews)"
            passagers="4 Passagers"
            doors="4 Doors"
          />
          <GroupComponent
            image12="/audi-1-1@2x.png"
            saloonCar="Estate Car"
            prop="4.6"
            reviews="(1.936 reviews)"
            passagers="2 Passagers"
            doors="2 Doors"
            propMinWidth="unset"
            propPadding="var(--padding-17xl) var(--padding-4xl) var(--padding-9xl) var(--padding-5xl)"
            propHeight="91px"
            propMinWidth1="84px"
            propDisplay="inline-block"
          />
          <GroupComponent
            image12="/image-13@2x.png"
            saloonCar="8 Seater"
            prop="4.5"
            reviews="(2.036 reviews)"
            passagers="4 Passagers"
            doors="4 Doors"
            propMinWidth="unset"
            propPadding="var(--padding-12xl) var(--padding-5xl) var(--padding-8xl)"
            propHeight="97px"
            propMinWidth1="67px"
            propDisplay="inline-block"
          />
          <GroupComponent
            image12="/image-11@2x.png"
            saloonCar="People Carrier"
            prop="4.3"
            reviews="(2.236 reviews)"
            passagers="2 Passagers"
            doors="2 Doors"
            propMinWidth="unset"
            propPadding="var(--padding-19xl) var(--padding-5xl) var(--padding-13xl)"
            propHeight="85px"
            propMinWidth1="115px"
            propDisplay="inline-block"
          />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <GroupComponent
              image12="/image-12-1@2x.png"
              saloonCar="Executive Car"
              prop="4.8"
              reviews="(2.436 reviews)"
              passagers="4 Passagers"
              doors="4 Doors"
              propMinWidth="192px"
              propPadding="var(--padding-7xl) var(--padding-5xl) var(--padding-6xl)"
              propHeight="104px"
              propMinWidth1="110px"
              propDisplay="inline-block"
            />
            <GroupComponent
              image12="/audi-1-2@2x.png"
              saloonCar="Executive People"
              prop="4.6"
              reviews="(1.936 reviews)"
              passagers="2 Passagers"
              doors="2 Doors"
              propMinWidth="192px"
              propPadding="var(--padding-17xl) var(--padding-4xl) var(--padding-9xl) var(--padding-5xl)"
              propHeight="91px"
              propMinWidth1="unset"
              propDisplay="unset"
            />
            <GroupComponent
              image12="/image-13-1@2x.png"
              saloonCar="Carrier"
              prop="4.5"
              reviews="(2.036 reviews)"
              passagers="4 Passagers"
              doors="4 Doors"
              propMinWidth="192px"
              propPadding="var(--padding-12xl) var(--padding-5xl) var(--padding-8xl)"
              propHeight="97px"
              propMinWidth1="56px"
              propDisplay="inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRentalCars;
