import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { bookingFormSelector, selectedCarSelector } from "../../stores/selectors";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import { post } from "../../utils/api";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CardElement";

interface PaymentProps {

}


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE);

const StripePayment: FunctionComponent<PaymentProps> = ({ clientSecret, setLoading }) => {
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
                    nvigation('/booking-success')
                }
            } catch (error) {
                nvigation('/booking-failed')
                console.log(error)
            }

        }).catch(() => nvigation('/booking-failed'))
    }

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };

    return (
        <>
            {
                clientSecret &&

                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm setLoading={setLoading} />
                </Elements>
            }
        </>

    );
};

export default StripePayment;