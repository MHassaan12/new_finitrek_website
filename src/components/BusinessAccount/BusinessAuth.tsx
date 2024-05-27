import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/businessAuth.module.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import DatePickerComponent from "../Common/DatePicker";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import TimePicker from "../Common/TimePicker";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const BusinessAuth: FunctionComponent = ({ setLoading }) => {
    const [bookingForm, setBookingForm] = useRecoilState(bookingFormState);
    const [bookingCars, setBookingCars] = useRecoilState(bookingCarsState);
    const [errors, setErrors] = useState({
        pickup: '',
        drop: '',
        oneWay: '',
        return: '',
        passenger: ''
    })
    const navigation = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!bookingForm.pickup) {
            setErrors((prev) => ({ ...prev, pickup: 'Pickup address is required!' }))
            return
        }
        if (!bookingForm.dropoff) {
            setErrors((prev) => ({ ...prev, drop: 'Dropoff address is required!' }))
            return
        }
        if (!bookingForm.myDate || !bookingForm.myTime) {
            setErrors((prev) => ({ ...prev, oneWay: 'Date and Time is required!' }))
            return
        }
        if (!bookingForm.hiddenmyDate || !bookingForm.retmyTime) {
            setErrors((prev) => ({ ...prev, return: 'Date and Time is required!' }))
            return
        }
        if (!bookingForm.passengers || (bookingForm.passengers == 0)) {
            setErrors((prev) => ({ ...prev, passenger: 'Passenger is required!' }))
            return
        }
        setLoading(true)
        try {
            let params = new URLSearchParams();
            for (const key in bookingForm) {
                if (Object.prototype.hasOwnProperty.call(bookingForm, key)) {
                    const element = (bookingForm as { [key: string]: any })[key];
                    params.set(key, element)
                }
            }
            const { data } = await post(`/api/price?${params}`, {})
            if (data?.cars?.length > 0) {
                setBookingCars(data.cars)
                setLoading(false)
                navigation('/car-search')
            } else {
                setLoading(false)
                alert(data.message)
            }

        } catch (error) {
            setLoading(false)
            console.log('FFFFFFFFFFFFFFFFFFFFFFFF EEEErrrrrF', error)

        }
    }

    return (
        <section className={styles.hero}>

            <div className={styles.mainContent}>
                <div className={styles.frameParent}>

                    <div className={styles.findBookAndRentACarEasiWrapper}>
                        <h1 className={styles.findBookAndContainer}>
                            <span>Save Cost & Hassle On Cabs For Your</span>
                            <span className={styles.easily}> Business</span>
                        </h1>
                        <div className={styles.parentPara}>
                            <p className={styles.para}>
                                Finitrek Enables You And Your Team To Compare Cab Prices And Book Online Easily
                            </p>
                        </div>
                        <div className={styles.register}>
                            <button onClick={()=>navigation('#') } className={styles.registerBtn}>
                                Register your Business
                            </button>
                            <p className={styles.text}>
                                Already a Business Account Member?
                            </p>
                        </div>
                        <div className={styles.register}>
                            <button className={styles.registerBtn}>
                                Login
                            </button>
                            <p className={styles.text}>
                                Want to join an existing business account.
                                Ask your account admin to invite you.
                            </p>
                        </div>

                        <img
                            className={styles.formLayoutChild}
                            alt=""
                            src="/easily-line.svg"
                        />
                    </div>
                </div>





            </div>
            <div className={styles.formContentIcon}>
                {/* <img
                    className={styles.bgframe}
                    alt=""
                    src="/form-content.svg"
                /> */}
                <img className={styles.car21} alt="" src="/Group 47.png" />

            </div>
        </section>
    );
};

export default BusinessAuth;
