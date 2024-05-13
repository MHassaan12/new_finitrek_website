import { FunctionComponent } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";

const CarSearchPage: FunctionComponent = () => {
  return (
    <div className={styles.carSearch}>
      <CabSearch />
      <DateArea />
    </div>
  );
};

export default CarSearchPage;
