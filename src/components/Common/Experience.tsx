import { FunctionComponent } from "react";
import styles from "../../Assets/css/Experience.module.css";

export type ExperienceType = {
  vuesaxbolduserTick?: string;
  experienceDriver?: string;
  dontHaveDriverDontWorryWe?: string;
  experiencedDriverForYou?: string;
};

const Experience: FunctionComponent<ExperienceType> = ({
  vuesaxbolduserTick,
  experienceDriver,
  dontHaveDriverDontWorryWe,
  experiencedDriverForYou,
}) => {
  return (
    <div className={styles.experience}>
      <div className={styles.iconCar}>
        <img
          className={styles.vuesaxbolduserTickIcon}
          loading="lazy"
          alt=""
          src={vuesaxbolduserTick}
        />
      </div>
      <div className={styles.experienceDetails}>
        <h2 className={styles.experienceDriver}>{experienceDriver}</h2>
        <div className={styles.dontHaveDriverContainer}>
          <p className={styles.dontHaveDriver}>{dontHaveDriverDontWorryWe}</p>
          <p className={styles.experiencedDriverFor}>
            {experiencedDriverForYou}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
