import { FunctionComponent } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import CarBooking from "../components/CarBooking/CarBooking";
import NameEmailInput from "../components/CarBooking/NameEmailInput";
import Payment from "../components/Payment";
import Login from "../components/Auth/Login";

const LoginPage: FunctionComponent = () => {
    return (
        // <div className={styles.carSearch}>
            <Login />
        // </div>
    );
};

export default LoginPage;
