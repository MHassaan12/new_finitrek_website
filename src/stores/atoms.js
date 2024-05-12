import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

export const bookingFormState = atom({
    key: 'bookingForm',
    default: { pickup: '', dropoff: '', bookingtype: '', myDate: '', hiddenmyDate: '', myTime: "", retmyTime: '', passengers: 0, luggage: 0, current_date: new Date(), submit: 'submit' },
    effects_UNSTABLE: [persistAtom]
});

export const bookingCarsState = atom({
    key: 'bookingCars',
    default:[],
    effects_UNSTABLE: [persistAtom]
});
