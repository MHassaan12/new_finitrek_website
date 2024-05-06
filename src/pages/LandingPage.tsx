import { FunctionComponent } from "react";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularRentalCars from "../components/PopularRentalCars";
import WhatPeopleSay from "../components/WhatPeopleSay";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

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
