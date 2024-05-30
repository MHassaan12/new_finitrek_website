import { FunctionComponent, useState } from "react";
import styles from "../Assets/css/Pages.module.css";
import CabSearch from "../components/CarSearch/CabSearch";
import DateArea from "../components/CarSearch/DateArea";
import CarBooking from "../components/CarBooking/CarBooking";
import NameEmailInput from "../components/CarBooking/NameEmailInput";
import Payment from "../components/Payment";
import Loader from "../components/Common/Loader";
import Breadcrum from "../components/Common/Breadcrum";
import PaymentInfo from "../components/Payment/PaymentInfo";

const PaymentFailPage: FunctionComponent = () => {
    const [loading, setLoading] = useState(false)

    if (loading) return <Loader />
    return (
        <div className={styles.carSearch}>
            <Breadcrum title="Payment Fail" />
            <PaymentInfo type="fail" />
            {/* <NameEmailInput /> */}
        </div>
    );
};

export default PaymentFailPage;
