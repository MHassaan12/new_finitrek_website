import { FunctionComponent } from "react";
import DateArea from "./DateArea";
import FilteredCardContent from "../Common/FilteredCardContent";
import styles from "../../Assets/css/CabSearch.module.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { useRecoilState } from "recoil";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import { post } from "../../utils/api";
import DatePickerComponent from "../Common/DatePicker";
import TimePicker from "../Common/TimePicker";

const CabSearch: FunctionComponent = () => {
  const [bookingForm, setBookingForm] = useRecoilState(bookingFormState);
  const [bookingCars, setBookingCars] = useRecoilState(bookingCarsState);

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
      }
      console.log('FFFFFFFFFFFFFFFFFFFFFFFFF', data)
    } catch (error) {
      console.log('FFFFFFFFFFFFFFFFFFFFFFFF EEEErrrrrF', error)

    }
  }
  return (
    <form className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.pickupArea}>
        <div className={styles.frameParent}>
          {/* <div className={styles.enterPickUpLocationWrapper}> */}
          <ReactGoogleAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            onPlaceSelected={(place) => {
              if (place?.formatted_address) {
                setBookingForm((prev: any) => ({ ...prev, pickup: place.formatted_address }))
              }
            }}

            className={styles.enterPickUpLocationWrapper}

          />
          {/* </div> */}
          <div className={styles.dropoffArea}>
            <div className={styles.dropoffLocationOptionsWrapper}>
              <div className={styles.dropoffLocationOptions}>
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
              className={styles.enterDropLocationWrapper}

            />
            {/* <div className={styles.enterDropLocationWrapper}>
              <div className={styles.enterDropLocation}>
                Enter Drop Location
              </div>
            </div> */}
          </div>
        </div>
        <div className={styles.passengerArea}>
          <div className={styles.passengersWrapper}>
            <input className={styles.passengers} type="number" placeholder="Passengers" value={bookingForm.passengers} onChange={(e) => setBookingForm((prev: any) => ({ ...prev, passengers: e.target.value }))} />
            {/* <div className={styles.passengers}>Passengers</div> */}
          </div>
          <div className={styles.luggageWrapper}>
            <input className={styles.luggage} type="number" placeholder="Luggage" value={bookingForm.luggage} onChange={(e) => setBookingForm((prev: any) => ({ ...prev, luggage: e.target.value }))} />
            {/* <div className={styles.luggage}>Luggage</div> */}
          </div>
        </div>
      </div>
      <div className={styles.tripDetailsArea}>
        <div className={styles.tripTypeArea}>
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
      <div className={styles.searchWrapper}>
        <div className={styles.search}>Search</div>
      </div>
    </form>
  );
};

export default CabSearch;
