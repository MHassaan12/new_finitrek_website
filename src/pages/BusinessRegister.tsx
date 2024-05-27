import { FunctionComponent } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import CarBooking from "../components/CarBooking/CarBooking";
import NameEmailInput from "../components/CarBooking/NameEmailInput";
import Payment from "../components/Payment";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import BusinessSignup from "../components/BusinessAccount/BusinessSignup";

const BusinessRegisterPage: FunctionComponent = () => {
    return (
        // <div className={styles.carSearch}>
        <BusinessSignup />
        // </div>
    );
};

export default BusinessRegisterPage;
