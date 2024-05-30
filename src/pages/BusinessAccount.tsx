import { FunctionComponent, useState } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import CarBooking from "../components/CarBooking/CarBooking";
import NameEmailInput from "../components/CarBooking/NameEmailInput";
import Loader from "../components/Common/Loader";
import Header from "../components/LandingPage/Header";
import HowItWork from "../components/LandingPage/HowItWork";
import WhyChooseUs from "../components/LandingPage/WhyChooseUs";
import PopularRentalCars from "../components/LandingPage/PopularRentalCars";
import DownloadApp from "../components/LandingPage/DownloadApp";
import BusinessAuth from "../components/BusinessAccount/BusinessAuth";

const BusinessAccountPage: FunctionComponent = () => {
    const [loading, setLoading] = useState(false)

    if (loading) return <Loader />
    return (
        <div className={styles.landingPage}>
            <BusinessAuth setLoading={setLoading}  />
            <HowItWork />
            <WhyChooseUs />
            <PopularRentalCars />
            {/* <WhatPeopleSay /> */}
            <DownloadApp />
        </div>
    );
};

export default BusinessAccountPage;