import { FunctionComponent } from "react";
import styles from "../../Assets/css/Breadcrum.module.css";

interface BreadcrumProps {
  title: string
}

const Breadcrum: FunctionComponent<BreadcrumProps> = ({title}) => {
  return (
    <div className={styles.container}>
      <div className={styles.Breadcrum}>
        <div className={styles.parent}>
        <div className={styles.text}>{title}</div>
        <div className={styles.text_2}> Home <img src="/Vector.png" alt="" />{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
