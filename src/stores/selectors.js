import { selector } from "recoil";
import { bookingCarsState, bookingFormState, selectedCarState } from "./atoms";

export const bookingFormSelector = selector({
    key: 'bookingFormSelector',
    get: ({ get }) => {
        const bookingForm = get(bookingFormState);
        if (bookingForm) {
            return bookingForm;
        }
        return {};
    },
});

export const bookingCarsSelector = selector({
    key: 'bookingCarsSelector',
    get: ({ get }) => {
        const bookingCars = get(bookingCarsState);
        if (bookingCars) {
            return bookingCars;
        }
        return [];
    },
});
export const selectedCarSelector = selector({
    key: 'selectedCarSelector',
    get: ({ get }) => {
        const bookingCars = get(selectedCarState);
        if (bookingCars) {
            return bookingCars;
        }
        return {};
    },
});