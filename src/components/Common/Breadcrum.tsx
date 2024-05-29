import { FunctionComponent } from "react";
import styles from "../../Assets/css/Breadcrum.module.css";

const Breadcrum: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Breadcrum}>
        <div className={styles.parent}>
        <div className={styles.text}>Booking Payment </div>
        <div className={styles.text_2}> Home <img src="public/Vector.png" alt="" />Booking List</div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
