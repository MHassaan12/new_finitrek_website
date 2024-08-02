import { FunctionComponent } from "react";
import styles from "../../Assets/css/Payment.module.css";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { bookingFormSelector, selectedCarSelector } from "../../stores/selectors";
import { useNavigate } from "react-router-dom";
import { post } from "../../utils/api";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import moment from "moment";
import StripePayment from "./StripePayment";


interface PaymentProps {
    setLoading: Function;
    clientSecret: String;
}


const Payment: FunctionComponent<PaymentProps> = ({ setLoading, clientSecret }) => {
    const bookingForm = useRecoilValue(bookingFormSelector)
    const selectedCar = useRecoilValue(selectedCarSelector)
    const resetBookingForm = useResetRecoilState(bookingFormState)
    const resetBookingCars = useResetRecoilState(bookingCarsState)
    const nvigation = useNavigate()
    const onCreateOrder = (data: any, actions: { order: any; }) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: selectedCar.vehiclePrice,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data: any, actions: any) => {
        setLoading(true)
        const params = new URLSearchParams();
        return actions.order.capture().then(async (details: {
            id: any; purchase_units: {
                payments: any; amount: {
                    currency_code: any; value: any;
                };
            }[]; status: any; payer: { payer_id: any; }; create_time: any;
        }) => {
            const formData = {
                user_id: '',
                vendor_id: selectedCar.vendor_id,
                // vendor_id: 27,
                payment_id: details.id,
                transaction_id: details.purchase_units[0].payments.captures[0].id,
                status: details.status,
                currency_code: details.purchase_units[0].amount.currency_code,
                amount: details.purchase_units[0].amount.value,
                payer_id: details.payer.payer_id,
                transaction_date_time: details.create_time,
                payment_method: 'paypal'
            }
            for (const key in formData) {
                if (Object.prototype.hasOwnProperty.call(formData, key)) {
                    const element = (formData as { [key: string]: any })[key];
                    params.set(key, element)
                }
            }
            try {
                const { data } = await post(`/api/userPaymentDetail?${params}`);
                if (data.message) {
                    // localStorage.setItem('user', JSON.stringify(data.authUser))
                    resetBookingForm()
                    resetBookingCars()
                    setLoading(false)
                    nvigation('/booking-success')
                }
            } catch (error) {
                setLoading(false)
                nvigation('/booking-failed')
                console.log(error)
            }

        }).catch(() => nvigation('/booking-failed'))
    }
    return (
        <PayPalScriptProvider options={{ merchantId: import.meta.env.VITE_PAYPAL_MERCHANTID, clientId: import.meta.env.VITE_PAYPAL_CLIENTID, components: "buttons", currency: "GBP", intent: "capture", }}>
            <div className={styles.payment}>
                <section className={styles.frameParent}>
                    <div className={styles.paymentParent}>
                        <h1 className={styles.payment1}>Payment</h1>
                        <div className={styles.frameWrapper}>
                            <div className={styles.rectangleParent}>
                                <div className={styles.frameChild} />
                                <div style={{ width: '90%' }}>
                                    <StripePayment clientSecret={clientSecret} setLoading={setLoading}/>

                                    <PayPalButtons
                                        // style={style}
                                        disabled={false}
                                        // forceReRender={[style]}
                                        fundingSource={undefined}
                                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <div className={styles.frameGroup}>
                            <div className={styles.bookingSummaryWrapper}>
                                <h1 className={styles.bookingSummary}>Booking Summary</h1>
                            </div>
                            <div className={styles.rectangleGroup}>
                                <div className={styles.frameInner} />
                                <div className={styles.frameDiv}>
                                    <div className={styles.frameParent1}>
                                        <div className={styles.frameParent2}>
                                            {selectedCar.name && <div className={styles.totalTax}>Provider</div>}
                                            <div className={styles.insurance}>Date</div>
                                            <div className={styles.insurance}>Time</div>
                                            <div className={styles.insurance}>Desired Vehicle</div>
                                            <div className={styles.insurance}>Pickup Address</div>
                                            <div className={styles.insurance}>Drop-off Address</div>
                                            <div className={styles.insurance}>Price</div>
                                            <div className={styles.insurance}>Persons</div>
                                            <div className={styles.insurance}>Luggage</div>
                                            <div className={styles.insurance}>Main Passenger Name</div>
                                            <div className={styles.insurance}>Phone Number</div>
                                            {bookingForm.flight_number && <div className={styles.insurance}>Flight</div>}
                                            {bookingForm.instruction && <div className={styles.insurance}>Notes</div>}
                                        </div>
                                        <div className={styles.frameParent3}>
                                            {selectedCar.name && <div className={styles.div1}>{selectedCar.name}</div>}
                                            <div className={styles.div1}> {moment(bookingForm.myDate).format('DD/MM/YYYY')}</div>
                                            <div className={styles.div1}>{bookingForm.myTime}</div>
                                            <div className={styles.div1}>{selectedCar.vehicleTypeName}</div>
                                            <div className={styles.div1}>{bookingForm.pickup}</div>
                                            <div className={styles.div1}>{bookingForm.dropoff}</div>
                                            <div className={styles.div1}>£{selectedCar.vehiclePrice}</div>
                                            <div className={styles.div1}>{selectedCar.car_seats}</div>
                                            <div className={styles.div1}>{selectedCar.luggage_count}</div>
                                            <div className={styles.div1}>{selectedCar.name}</div>
                                            <div className={styles.div1}>{selectedCar.contact_number}</div>
                                            {bookingForm.flight_number && <div className={styles.div1}>{selectedCar.flight_number}</div>}
                                            {bookingForm.instruction && <div className={styles.div1}>{selectedCar.instruction}</div>}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.frameGroup}>
                            <div className={styles.bookingSummaryWrapper}>
                                <h1 className={styles.bookingSummary}>Payment Summary</h1>
                            </div>
                            <div className={styles.rectangleGroup}>
                                <div className={styles.frameInner} />
                                <div className={styles.frameDiv}>
                                    <div className={styles.frameParent1}>
                                        <div className={styles.frameParent2}>
                                            <div className={styles.detail01Wrapper}>
                                                <div className={styles.detail01}>Detail 01</div>
                                            </div>
                                            <div className={styles.totalTax}>Total Tax</div>
                                            <div className={styles.insurance}>Insurance</div>
                                        </div>
                                        <div className={styles.frameParent3}>
                                            <div className={styles.wrapper}>
                                                <div className={styles.div}>£{selectedCar.vehiclePrice}</div>
                                            </div>
                                            <div className={styles.div1}>£0</div>
                                            <div className={styles.container}>
                                                <div className={styles.div2}>£0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.rectangleContainer}>
                                    <div className={styles.rectangleDiv} />
                                    <div className={styles.grandTotal}>Grand Total</div>
                                    <div className={styles.div3}>£{selectedCar.vehiclePrice}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={styles.paymentInner}>
                    <div className={styles.frameParent4}>
                        <div className={styles.poweredByWrapper}>
                            <div className={styles.poweredBy}>Powered by</div>
                        </div>
                        <img
                            className={styles.groupIcon}
                            loading="lazy"
                            alt=""
                            src="/group-37@2x.png"
                        />
                    </div>
                </div>
            </div>
        </PayPalScriptProvider>

    );
};

export default Payment;
