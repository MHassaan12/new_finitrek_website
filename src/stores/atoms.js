import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

export const bookingFormState = atom({
    key: 'bookingForm',
    default: { pickup: '', dropoff: '',via1: "", via2: "", via3: "", bookingtype: '', myDate: '', hiddenmyDate: '', myTime: "", retmyTime: '', passengers: 0, luggage: '', current_date: new Date(), submit: 'submit' },
    effects_UNSTABLE: [persistAtom]
});

export const bookingDetailFormState = atom({
    key: 'bookingDetailForm',
    default: { name: '', email: '',contact_number: "", flat_no: "", flight_number: "", passenger: '', luggage: '', hand_luggage: '', instruction: "", },
    effects_UNSTABLE: [persistAtom]
});

export const bookingCarsState = atom({
    key: 'bookingCars',
    default: [],
    effects_UNSTABLE: [persistAtom]
});

export const selectedCarState = atom({
    key: 'selectedCar',
    default: {},
    effects_UNSTABLE: [persistAtom]
});
