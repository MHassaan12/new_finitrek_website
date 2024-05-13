import { selector } from "recoil";
import { bookingCarsState, bookingFormState, selectedCarState } from "./atoms";

export const bookingFormSelector = selector({
    key: 'bookingForm',
    get: ({ get }) => {
        const bookingForm = get(bookingFormState);
        if (bookingForm) {
            return bookingForm;
        }
        return {};
    },
});

export const bookingCarsSelector = selector({
    key: 'bookingForm',
    get: ({ get }) => {
        const bookingForm = get(bookingCarsState);
        if (bookingForm) {
            return bookingForm;
        }
        return [];
    },
});
export const selectedCarSelector = selector({
    key: 'bookingForm',
    get: ({ get }) => {
        const bookingForm = get(selectedCarState);
        if (bookingForm) {
            return bookingForm;
        }
        return {};
    },
});