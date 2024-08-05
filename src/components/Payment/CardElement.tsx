import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  bookingFormSelector,
  selectedCarSelector,
} from "../../stores/selectors";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import { useNavigate } from "react-router-dom";
import { post } from "../../utils/api";

const CheckoutForm = ({ setLoading: { setLoading: any } }) => {
  const stripe = useStripe();
  const elements = useElements();
  const bookingForm = useRecoilValue(bookingFormSelector);
  const selectedCar = useRecoilValue(selectedCarSelector);
  const resetBookingForm = useResetRecoilState(bookingFormState);
  const resetBookingCars = useResetRecoilState(bookingCarsState);
  const nvigation = useNavigate();
  const params = new URLSearchParams();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        nvigation("/booking-failed");
      } else {
        const formData = {
          user_id: "",
          vendor_id: selectedCar.vendor_id,
          payment_id: paymentMethod.id,
          // transaction_id: details.purchase_units[0].payments.captures[0].id,
          // status: details.status,
          // // currency_code: details.purchase_units[0].amount.currency_code,
          amount: selectedCar.vehiclePrice,
          // // payer_id: details.payer.payer_id,
          transaction_date_time: paymentMethod.created,
          payment_method: "stripe",
        };
        for (const key in formData) {
          if (Object.prototype.hasOwnProperty.call(formData, key)) {
            const element = (formData as { [key: string]: any })[key];
            params.set(key, element);
          }
        }
        try {
          const { data } = await post(`/api/userPaymentDetail?${params}`);
          if (data.message) {
            // localStorage.setItem('user', JSON.stringify(data.authUser))
            resetBookingForm();
            resetBookingCars();
            setLoading(false);
            nvigation("/booking-success");
          }
        } catch (error) {
          setLoading(false);
          nvigation("/booking-failed");
          console.log(error);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button
        type="submit"
        disabled={!stripe}
        style={{
          backgroundColor: "#93278f",
          borderRadius: "10px",
          padding: "14px 36px",
          border: "none",
          cursor: "pointer",
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "20px",
          color: "white",
          margin: "16px 0px",
        }}
      >
        Stripe Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
