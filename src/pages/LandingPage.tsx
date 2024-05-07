import { FunctionComponent } from "react";
import Header from "../components/LandingPage/Header";
import HowItWork from "../components/LandingPage/HowItWork";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import PopularRentalCars from "../components/LandingPage/PopularRentalCars";
import WhatPeopleSay from "../components/LandingPage/WhatPeopleSay";
import DownloadApp from "../components/LandingPage/DownloadApp";
import Footer from "../components/LandingPage/Footer";
import styles from "../Assets/css/LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <HowItWork />
      <WhyChooseUs />
      <PopularRentalCars />
      <WhatPeopleSay />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default LandingPage;
