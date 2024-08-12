import { selector } from "recoil";
import { bookingCarsState, bookingDetailFormState, bookingFormState, selectedCarState } from "./atoms";

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

export const bookingDetailFormSelector = selector({
    key: 'bookingDetailFormSelector',
    get: ({ get }) => {
        const bookingDetailForm = get(bookingDetailFormState);
        if (bookingDetailForm) {
            return bookingDetailForm;
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