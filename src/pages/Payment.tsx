import { FunctionComponent } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import CarBooking from "../components/CarBooking/CarBooking";
import NameEmailInput from "../components/CarBooking/NameEmailInput";
import Payment from "../components/Payment";

const PaymentPage: FunctionComponent = () => {
    return (
        <div className={styles.carSearch}>
            <Payment />
            {/* <NameEmailInput /> */}
        </div>
    );
};

export default PaymentPage;
