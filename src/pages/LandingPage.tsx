import { FunctionComponent, useState } from "react";
import Header from "../components/LandingPage/Header";
import HowItWork from "../components/LandingPage/HowItWork";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import PopularRentalCars from "../components/LandingPage/PopularRentalCars";
import WhatPeopleSay from "../components/LandingPage/WhatPeopleSay";
import DownloadApp from "../components/LandingPage/DownloadApp";
import styles from "../Assets/css/LandingPage.module.css";
import Loader from "../components/Common/Loader";

const LandingPage: FunctionComponent = () => {
  const [loading, setLoading]=useState(false)

  if(loading) return <Loader/>
  return (
    <div className={styles.landingPage}>
      <Header setLoading={setLoading} />
      <HowItWork />
      <WhyChooseUs />
      <PopularRentalCars />
      {/* <WhatPeopleSay /> */}
      <DownloadApp />
    </div>
  );
};

export default LandingPage;
