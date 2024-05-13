import { FunctionComponent, useState } from "react";
import NameEmailInput from "./NameEmailInput";
import styles from "../../Assets/css/CarBooking.module.css";
import { useRecoilValue } from "recoil";
import { bookingFormSelector, selectedCarSelector } from "../../stores/selectors";
import { useForm } from "react-hook-form";
import moment from "moment";
import { post } from "../../utils/api";

const CarBooking: FunctionComponent = () => {
    const bookingForm = useRecoilValue(bookingFormSelector)
    const selectedCar = useRecoilValue(selectedCarSelector)
    const { register, handleSubmit, } = useForm();

    const onSubmit = async (body: any) => {
        const params = new URLSearchParams();
        const formData: FormData = {
            pickup_date: moment(bookingForm?.myDate).format("MM-DD-YYYY"),
            pickup_time: bookingForm.myTime,
            dropoff_date: bookingForm?.hiddenmyDate ? moment(bookingForm.hiddenmyDate).format("MM-DD-YYYY") : '',
            dropoff_time: bookingForm.retmyTime,
            flight_number: body.flight_number,
            name: body.name,
            email: body.email,
            contact_number: body.contact_number,
            total_passenger: body.passenger,
            total_luggage: body.luggage,
            total_hand_luggage: body.hand_luggage,
            instruction_for_driver: body.instruction,
            vendor_id: selectedCar.vendor_id,
            user_id: selectedCar.id || '',
            is_meet_and_greet: body.is_meet ? 1 : 0,
            is_child_seat: body.is_child ? 1 : 0,
        }
        try {
            for (const key in formData) {
                if (Object.prototype.hasOwnProperty.call(formData, key)) {
                    const element = (formData as { [key: string]: any })[key];
                    params.set(key, element)
                }
            }
            const { data } = await post(`/api/userRequest?${params}`, body);
            if (data.message) {
                // localStorage.setItem('user', JSON.stringify(data.authUser))
                // ('/cab/booking/booking-payment')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.carBooking}>
            <section className={styles.page}>
                <div className={styles.content}>
                    <h1 className={styles.information}>Information</h1>
                    <div className={styles.bookingDetails}>
                        <div className={styles.pickupInformation}>
                            <div className={styles.locationDetails}>
                                <div className={styles.locationDetailsChild} />
                                <div className={styles.pickUp}>Pick Up</div>
                                <div className={styles.pickupTimeLocation}>
                                    <div className={styles.date29Apr20241120}>
                                        Date: {bookingForm.myDate} {bookingForm.myTime}
                                    </div>
                                    <div className={styles.londonHeathrowTerminal}>
                                        {bookingForm.pickup}
                                    </div>
                                </div>
                                <div className={styles.dropoffInformation}>
                                    <div className={styles.dropUp}>Drop Up</div>
                                    <div className={styles.londonStanstedAirport}>
                                        {bookingForm.dropoff}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className={styles.contactDetails}>Contact Details</h1>
                    </div>
                </div>
                <div className={styles.summaryAndActions}>
                    <div className={styles.summary}>
                        <div className={styles.bookingOverview}>
                            <h1 className={styles.bookingSummary}>Booking Summary</h1>
                        </div>
                        <div className={styles.rectangleParent}>
                            <div className={styles.frameChild} />
                            <div className={styles.vehicleType}>
                                <div className={styles.saloonCar}>{selectedCar.brand_name}</div>
                                <div className={styles.vehicleRating}>
                                    <img
                                        className={styles.starIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/rating-stars.svg"
                                    />
                                    <div className={styles.reviewCount}>
                                        <div className={styles.reviews}>
                                            <span>
                                                <span className={styles.span}>4.8</span>
                                            </span>
                                            <span className={styles.reviews1}>
                                                <span>{` `}</span>
                                                <span>(2.436 reviews)</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.vehicleFeatures}>
                                <div className={styles.featureIcons}>
                                    <div className={styles.passengerAndComfort}>
                                        <img
                                            className={styles.vuesaxlinearuserIcon}
                                            loading="lazy"
                                            alt=""
                                            src="/vuesaxlinearuser.svg"
                                        />
                                        <div className={styles.passagers}>{selectedCar.car_seats} Passagers</div>
                                    </div>
                                </div>
                                <div className={styles.featureIcons1}>
                                    <img
                                        className={styles.frameIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/frame-1.svg"
                                    />
                                    <div className={styles.auto}>Auto</div>
                                </div>
                                <div className={styles.featureIcons2}>
                                    <img
                                        className={styles.frameIcon1}
                                        loading="lazy"
                                        alt=""
                                        src="/frame-3.svg"
                                    />
                                    <div className={styles.doors}>4 Doors</div>
                                </div>
                                <div className={styles.featureIcons3}>
                                    <div className={styles.frameParent}>
                                        <img
                                            className={styles.frameIcon2}
                                            loading="lazy"
                                            alt=""
                                            src="/frame-2.svg"
                                        />
                                        <div className={styles.airConditioning}>
                                            Air Conditioning
                                        </div>
                                    </div>
                                </div>
                                <img
                                    className={styles.image12Icon}
                                    loading="lazy"
                                    alt=""
                                    src={selectedCar?.imageUrl ? selectedCar?.imageUrl : "/image-121@2x.png"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bookingConfirmation}>
                        <h1 className={styles.bookingSummary1}>Booking Summary</h1>
                    </div>
                </div>
            </section>
            <section className={styles.bookingForm}>
                <form className={styles.passengerInformation} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.passengerInformationChild} />
                    <div className={styles.contactInformation}>
                        <div className={styles.contactDetailsInput}>
                            <div className={styles.nameEmailInput}>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>Name</div>
                                    </div>
                                    {/* <div className={styles.pickupLocationInput}> */}
                                    <input className={styles.pickupLocationInput} placeholder="Name" {...register("name")} />
                                    {/* </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>Email</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="Email" {...register("email")} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>Contact Number</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="Contact Number" {...register("contact_number")} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>Door No./Flat No.</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="Door No./Flat No." {...register("flat_no")} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>No. of Passengers</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="No. of Passengers" {...(register("passenger"))} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>No. of Luggage</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="No. of Luggage" {...(register("luggage"))} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                                <div className={styles.locationInputRepeat}>
                                    <div className={styles.contactDetailsLabels}>
                                        <div className={styles.name}>No. of Hand Luggage</div>
                                    </div>
                                    <input className={styles.pickupLocationInput} placeholder="No. of Hand Luggage" {...(register("hand_luggage"))} />
                                    {/* <div className={styles.pickupLocationInput}>
                                        <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className={styles.passengerDetails}>
                        <div className={styles.locationInput}>
                            <div className={styles.specialRequest}>
                                <div className={styles.noOfPassengers}>No. of Passengers</div>
                            </div>
                            <div className={styles.dropoffLocationInput}>
                                <div className={styles.enterDropLocation}>
                                    Enter Drop Location
                                </div>
                            </div>
                        </div>
                        <div className={styles.luggageInformation}>
                            <div className={styles.luggageInput}>
                                <div className={styles.noOfLuggage}>No. of Luggage</div>
                            </div>
                            <div className={styles.dropoffConfirmation}>
                                <div className={styles.enterDropLocation1}>
                                    Enter Drop Location
                                </div>
                            </div>
                        </div>
                        <div className={styles.handLuggageInfo}>
                            <div className={styles.handLuggageInput}>
                                <div className={styles.noOfHand}>No. of Hand Luggage</div>
                            </div>
                            <div className={styles.dropoffConfirmationRepeat}>
                                <div className={styles.enterDropLocation2}>
                                    Enter Drop Location
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.passengerDetails1}>
                        <div className={styles.frameGroup}>
                            <div className={styles.specialRequestWrapper}>
                                <div className={styles.specialRequest1}>Special Request</div>
                            </div>
                            <textarea className={styles.writeHereWrapper} placeholder="Write here ..." {...(register("instruction"))} />
                            {/* <div className={styles.writeHereWrapper}>
                                <div className={styles.writeHere}>Write here ...</div>
                            </div> */}
                        </div>
                    </div>
                    <div className={styles.paymentButtonContainerWrapper}>
                        <div className={styles.paymentButtonContainer}>
                            <div className={styles.proceedToPay}>Proceed To Pay</div>
                        </div>
                    </div>
                </form>
                <div className={styles.priceBreakdown}>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.costDetails}>
                            <div className={styles.priceLabels}>
                                <div className={styles.costBreakdownLabels}>
                                    <div className={styles.detail01}>Detail 01</div>
                                    <h3 className={styles.totalTax}>Total Tax</h3>
                                    <h3 className={styles.insurance}>Insurance</h3>
                                </div>
                                <div className={styles.costBreakdownLabels1}>
                                    <div className={styles.div}>${selectedCar.vehiclePrice}</div>
                                    <div className={styles.div1}>$0</div>
                                    <div className={styles.div2}>$0</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.totalCost}>
                            <div className={styles.totalCostChild} />
                            <h3 className={styles.grandTotal}>Grand Total</h3>
                            <div className={styles.totalCostLabel}>${selectedCar.vehiclePrice}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarBooking;
