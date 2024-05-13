import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/Header.module.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import DatePickerComponent from "../Common/DatePicker";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import TimePicker from "../Common/TimePicker";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const [bookingForm, setBookingForm] = useRecoilState(bookingFormState);
  const [bookingCars, setBookingCars] = useRecoilState(bookingCarsState);
  const navigation = useNavigate()

  const handleSubmit = async () => {
    try {
      let params = new URLSearchParams();
      for (const key in bookingForm) {
        if (Object.prototype.hasOwnProperty.call(bookingForm, key)) {
          const element = (bookingForm as { [key: string]: any })[key];
          params.set(key, element)
        }
      }
      const { data } = await post(`/api/price?${params}`, {})
      if (data.cars.length > 0) {
        setBookingCars(data.cars)
        navigation('/car-search')
      }
      console.log('FFFFFFFFFFFFFFFFFFFFFFFFF', data)
    } catch (error) {
      console.log('FFFFFFFFFFFFFFFFFFFFFFFF EEEErrrrrF', error)

    }
  }

  return (
    <section className={styles.header}>
     
      <div className={styles.mainContent}>
        <div className={styles.frameParent}>

          <div className={styles.findBookAndRentACarEasiWrapper}>
            <h1 className={styles.findBookAndContainer}>
              <span>Find, book and rent a car</span>
              <span className={styles.easily}> Easily</span>
            </h1>
            <form className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.pickUpLocation}>
                {/* <div className={styles.inputBox}> */}
                <ReactGoogleAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => {
                    if (place?.formatted_address) {
                      setBookingForm((prev: any) => ({ ...prev, pickup: place.formatted_address }))
                    }
                  }}

                  className={styles.inputBox}

                />
                {/* <div className={styles.enterPickUp}>Enter Pick Up Location</div> */}
                {/* </div> */}
                <div className={styles.locationIcon}>
                  <div className={styles.viaDropdown}>
                    <div className={styles.iconLayout}>
                      <img
                        className={styles.vuesaxboldlocationAddIcon}
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldlocationadd.svg"
                      />
                      <div className={styles.viaWrapper}>
                        <div className={styles.via}>Via</div>
                      </div>
                      <img
                        className={styles.vuesaxboldarrangeSquare2Icon}
                        loading="lazy"
                        alt=""
                        src="/vuesaxboldarrangesquare2.svg"
                      />
                    </div>
                  </div>
                  <ReactGoogleAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    onPlaceSelected={(place) => {
                      if (place.formatted_address) {
                        setBookingForm((prev: any) => ({ ...prev, dropoff: place.formatted_address }))
                        // setTo(place.formatted_address)
                      }
                    }}
                    className={styles.dropOffLocation}

                  />
                  {/* <div className={styles.dropOffLocation}>
                    <div className={styles.enterDropLocation}>
                      Enter Drop Location
                    </div>
                  </div> */}
                </div>
              </div>
              <div className={styles.tripType}>
                <div className={styles.tripOptions}>
                  <div className={styles.oneWayWrapper}>
                    <div className={styles.oneWay}>One Way</div>
                    <div className={styles.datePickerLayout}>
                      <div className={styles.selectDateWrapper}>
                        <DatePickerComponent setStart={(date: any) => setBookingForm((prev: any) => ({ ...prev, myDate: date }))} start={bookingForm.myDate} disabled={false} />
                      </div>
                      <div>
                        <TimePicker setTime={(time) => setBookingForm((prev: any) => ({ ...prev, myTime: time }))} time={bookingForm.myTime} disabled={false} />
                      </div>

                    </div>
                  </div>
                  <div className={styles.oneWayWrapper}>
                    <div className={styles.oneWay}>Return</div>
                    <div className={styles.datePickerLayout}>
                      <div className={styles.selectDateWrapper}>
                        <DatePickerComponent setStart={(date: any) => setBookingForm((prev: any) => ({ ...prev, hiddenmyDate: date }))} start={bookingForm.hiddenmyDate} disabled={false} />
                      </div>
                      <div>
                        <TimePicker setTime={(time) => setBookingForm((prev: any) => ({ ...prev, retmyTime: time }))} time={bookingForm.retmyTime} disabled={false} />
                      </div>

                    </div>
                  </div>


                </div>
              </div>
              <div className={styles.travelers}>
                <div className={styles.travelerOptions}>

                  <input className={styles.passengers} type="number" placeholder="Passengers" onChange={(e) => setBookingForm((prev: any) => ({ ...prev, passengers: e.target.value }))} />

                </div>
                <div className={styles.luggageCount}>
                  <input className={styles.luggage} type="number" placeholder="Luggage" onChange={(e) => setBookingForm((prev: any) => ({ ...prev, luggage: e.target.value }))} />
                </div>
              </div>
              <div className={styles.bookButton}>
                <div className={styles.bookNow} onClick={handleSubmit}>Book Now</div>
              </div>
            </form>
            <img
              className={styles.formLayoutChild}
              alt=""
              src="/easily-line.svg"
            />
          </div>
        </div>




        {/* <div className={styles.bookingForm}>
          <div className={styles.formLayout}>
            <img
              className={styles.formContentIcon}
              alt=""
              src="/form-content.svg"
            />
            <img className={styles.car21} alt="" src="/car-2-1@2x.png" />
            <img
              className={styles.formLayoutChild}
              alt=""
              src="/vector-1.svg"
            />
          </div>

        </div> */}
      </div>
      <div className={styles.formContentIcon}>
        <img
          className={styles.bgframe}
          alt=""
          src="/form-content.svg"
        />
        <img className={styles.car21} alt="" src="/car-2-1@2x.png" />

      </div>
    </section>
  );
};

export default Header;
