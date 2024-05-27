import { FunctionComponent, useState } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import Loader from "../components/Common/Loader";
import Breadcrum from "../components/Common/Breadcrum";

const CarSearchPage: FunctionComponent = () => {
  const [loading, setLoading]=useState(false)

  if(loading) return <Loader/>
  return (
    <div className={styles.carSearch}>
      <Breadcrum/>
      <CabSearch />

      <DateArea setLoading={setLoading} />
    </div>
  );
};

export default CarSearchPage;
