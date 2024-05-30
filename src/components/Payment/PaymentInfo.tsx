import { FunctionComponent } from "react"
import styles from '../../Assets/css/PaymentInfo.module.css'
import { useNavigate } from "react-router-dom"
import { useResetRecoilState } from "recoil"
import { bookingCarsState, bookingFormState } from "../../stores/atoms"

interface PaymentInfoProps {
    type: string
}

const PaymentInfo: FunctionComponent<PaymentInfoProps> = ({ type }) => {
    const resetBookingForm = useResetRecoilState(bookingFormState)
    const resetBookingCars = useResetRecoilState(bookingCarsState)
    const navigate = useNavigate()
    return (
        <div className={styles.parent}>
            <div className={styles.paymentParent}>
                <div className={styles.frameWrapper}>
                    <div className={styles.rectangleParent}>
                        {type == 'success' ?
                            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>

                                <h2 className={styles.heading}>Payment Successful ! get ready to ride</h2>
                                <p className={styles.text}>
                                    Thank you for you payment. we have received your payment successfully.
                                </p>
                                <div className={styles.btnGroup}>
                                    <button onClick={() => { resetBookingForm(); resetBookingCars(); navigate('/') }} className={styles.btn}>
                                        GO Back To Home
                                    </button>
                                </div>
                            </div>
                            :
                            <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
                                <h2 className={styles.heading}>oops ! we are unable to process your payment</h2>
                                <p className={styles.text}>looks like we encountered an error. please try again. if you continue to have issue, try another payment method.</p>
                                <div className={styles.btnGroup}>
                                    <button onClick={() => { resetBookingForm(); resetBookingCars(); navigate('/') }} className={styles.btn}>
                                        GO Back To Home
                                    </button>
                                    <button onClick={() => navigate('/payment')} className={styles.btn}>
                                        Try Again
                                    </button>
                                </div>
                            </div>}

                    </div>
                </div>
            </div>
        </div>


    )
}

export default PaymentInfo;