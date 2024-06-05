import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/Header.module.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import DatePickerComponent from "../Common/DatePicker";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { bookingCarsState, bookingFormState } from "../../stores/atoms";
import TimePicker from "../Common/TimePicker";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setLoading: Function;
}


const Header: FunctionComponent<HeaderProps> = ({ setLoading }) => {
  const [bookingForm, setBookingForm] = useRecoilState(bookingFormState);
  const [bookingCars, setBookingCars] = useRecoilState(bookingCarsState);
  const resetBookingForm = useResetRecoilState(bookingFormState)
  const [via, setVia] = useState<any>([])
  const [errors, setErrors] = useState({
    pickup: '',
    drop: '',
    oneWay: '',
    return: '',
    passenger: ''
  })
  const navigation = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!bookingForm.pickup) {
      setErrors((prev) => ({ ...prev, pickup: 'Pickup address is required!' }))
      return
    }
    if (!bookingForm.dropoff) {
      setErrors((prev) => ({ ...prev, drop: 'Dropoff address is required!' }))
      return
    }
    if (!bookingForm.myDate || !bookingForm.myTime) {
      setErrors((prev) => ({ ...prev, oneWay: 'Date and Time is required!' }))
      return
    }
    // if (!bookingForm.hiddenmyDate || !bookingForm.retmyTime) {
    //   setErrors((prev) => ({ ...prev, return: 'Date and Time is required!' }))
    //   return
    // }
    if (!bookingForm.passengers || (bookingForm.passengers == 0)) {
      setErrors((prev) => ({ ...prev, passenger: 'Passenger is required!' }))
      return
    }
    setLoading(true)
    try {
      let params = new URLSearchParams();
      for (const key in bookingForm) {
        if (Object.prototype.hasOwnProperty.call(bookingForm, key)) {
          const element = (bookingForm as { [key: string]: any })[key];
          params.set(key, element)
        }
      }

      const { data } = await post(`/api/price?${params}`, {})
      if (data?.cars?.length > 0) {
        setBookingCars(data.cars)
        setLoading(false)
        navigation('/car-search')
      } else {
        resetBookingForm()
        setLoading(false)
        alert(data.message)
      }

    } catch (error) {
      setLoading(false)
      console.log('FFFFFFFFFFFFFFFFFFFFFFFF EEEErrrrrF', error)

    }
  }

  const handleVia = (type: string) => {
    if (type == 'add') {
      if (via.length < 3) {
        setVia((prev: any) => [...prev, { [`via${prev.length + 1}`]: '' }])
      }
    } else {
      setVia((prev:any) => prev.slice(0, -1));
    }
  }

  return (
    <section className={styles.hero}>

      <div className={styles.mainContent}>
        <div className={styles.frameParent}>

          <div className={styles.findBookAndRentACarEasiWrapper}>
            <h1 className={styles.findBookAndContainer}>
              <span>Ride Smart, Pay Less Compare and Book with</span>
              <span className={styles.easily}> Finitrek</span>
            </h1>
            <form className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.pickUpLocation}>
                {/* <div className={styles.inputBox}> */}
                <ReactGoogleAutocomplete
                  apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                  onPlaceSelected={(place) => {
                    setErrors((prev) => ({ ...prev, pickup: '' }))
                    if (place?.formatted_address) {
                      setBookingForm((prev: any) => ({ ...prev, pickup: place.formatted_address }))
                    }
                  }}
                  options={{
                    types: [
                      'address',
                      // '(regions)',
                      // '(cities)',
                      // '(countries)',
                      // '(streets)',
                      // '(routes)',
                      // '(airports)',
                      // '(postal_code)',
                    ],// You can customize this array
                    componentRestrictions: { country: 'uk' },
                    fields: ['formatted_address', 'geometry', 'name'],
                    bounds: {
                      north: 55.0,
                      south: 50.0,
                      east: 1.5,
                      west: -3.0
                    },
                    strictBounds: false
                  }}

                  className={styles.inputBox}

                />
                {errors.pickup && <span className={styles.error}>{errors.pickup}</span>}
                {/* <div className={styles.enterPickUp}>Enter Pick Up Location</div> */}
                {/* </div> */}
                <div className={styles.locationIcon}>
                  <div className={styles.viaDropdown}>
                    <div className={styles.iconLayout}>
                      <div className={styles.viaWrapper} onClick={() => handleVia('add')}>
                        <img
                          className={styles.vuesaxboldlocationAddIcon}
                          loading="lazy"
                          alt=""
                          src="/vuesaxboldlocationadd.svg"
                        />
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
                  {
                    via.map((_: any, i: number) => (
                      <div className={styles.viaDiv}>
                        <div style={{ margin: "0px 12px" }}>
                          <ReactGoogleAutocomplete
                            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                            onPlaceSelected={(place) => {
                              if (place?.formatted_address) {
                                setBookingForm((prev: any) => ({ ...prev, [`via${i + 1}`]: place.formatted_address }))
                              }
                            }}
                            options={{
                              types: [
                                'address',
                                // '(regions)',
                                // '(cities)',
                                // '(countries)',
                                // '(streets)',
                                // '(routes)',
                                // '(airports)',
                                // '(postal_code)',
                              ],// You can customize this array
                              componentRestrictions: { country: 'uk' },
                              fields: ['formatted_address', 'geometry', 'name'],
                              bounds: {
                                north: 55.0,
                                south: 50.0,
                                east: 1.5,
                                west: -3.0
                              },
                              strictBounds: false
                            }}

                            className={styles.inputBox}
                          />
                        </div>
                        <div onClick={() => handleVia('subtract')}>
                          <img
                            className={styles.vuesaxboldarrangeSquare2Icon}
                            loading="lazy"
                            alt=""
                            src="/shield-cross.svg"
                          />
                        </div>
                      </div>
                    ))
                  }
                  <ReactGoogleAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                    onPlaceSelected={(place) => {
                      setErrors((prev) => ({ ...prev, drop: '' }))
                      if (place.formatted_address) {
                        setBookingForm((prev: any) => ({ ...prev, dropoff: place.formatted_address }))
                        // setTo(place.formatted_address)
                      }
                    }}
                    options={{
                      types: [
                        'address',
                        // '(regions)',
                        // '(cities)',
                        // '(countries)',
                        // '(streets)',
                        // '(routes)',
                        // '(airports)',
                        // '(postal_code)',
                      ],// You can customize this array
                      componentRestrictions: { country: 'uk' },
                      fields: ['formatted_address', 'geometry', 'name'],
                      bounds: {
                        north: 55.0,
                        south: 50.0,
                        east: 1.5,
                        west: -3.0
                      },
                      strictBounds: false
                    }}
                    className={styles.dropOffLocation}

                  />
                  {errors.drop && <span className={styles.error}>{errors.drop}</span>}
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
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className={styles.datePickerLayout}>
                        <div className={styles.selectDateWrapper}>
                          <DatePickerComponent setStart={(date: any) => { setBookingForm((prev: any) => ({ ...prev, myDate: date })); setErrors((prev) => ({ ...prev, oneWay: '' })) }} start={bookingForm.myDate} disabled={false} minDate={new Date} />
                        </div>
                        <div>
                          <TimePicker setTime={(time: any) => { setBookingForm((prev: any) => ({ ...prev, myTime: time })); setErrors((prev) => ({ ...prev, oneWay: '' })) }} time={bookingForm.myTime} disabled={false} />
                        </div>
                      </div>
                      {errors.oneWay && <span className={styles.error}>{errors.oneWay}</span>}
                    </div>

                  </div>
                  <div className={styles.oneWayWrapper}>
                    <div className={styles.oneWay}>Return</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className={styles.datePickerLayout}>
                        <div className={styles.selectDateWrapper}>
                          <DatePickerComponent setStart={(date: any) => { setBookingForm((prev: any) => ({ ...prev, hiddenmyDate: date })); setErrors((prev) => ({ ...prev, return: '' })) }} start={bookingForm.hiddenmyDate} disabled={false} minDate={bookingForm.myDate} />
                        </div>
                        <div>
                          <TimePicker setTime={(time: any) => { setBookingForm((prev: any) => ({ ...prev, retmyTime: time })); setErrors((prev) => ({ ...prev, return: '' })) }} time={bookingForm.retmyTime} disabled={false} />
                        </div>

                      </div>
                      {errors.return && <span className={styles.error}>{errors.return}</span>}
                    </div>

                  </div>

                </div>
              </div>
              <div className={styles.travelers}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className={styles.travelerOptions}>
                    <select className={styles.passengers} onChange={(e) => { setBookingForm((prev: any) => ({ ...prev, passengers: e.target.value })); setErrors((prev) => ({ ...prev, passenger: '' })) }}>
                      <option value="">Passengers</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                    {/* <input className={styles.passengers} type="number" min="16" max="1" placeholder="Passengers" onChange={(e) => { setBookingForm((prev: any) => ({ ...prev, passengers: e.target.value })); setErrors((prev) => ({ ...prev, passenger: '' })) }} /> */}
                  </div>
                  {errors.passenger && <span className={styles.error}>{errors.passenger}</span>}
                </div>
                <div className={styles.luggageCount}>
                  <select className={styles.luggage} onChange={(e) => setBookingForm((prev: any) => ({ ...prev, luggage: e.target.value }))}>
                    <option value="">Luggage</option>
                    <option value="suitcase">Suitcase (Approx 78x50x32 cm) </option>
                    <option value="hand">Hand Luggage</option>
                  </select>
                  {/* <input className={styles.luggage} type="number" min="16" max="1" placeholder="Luggage" onChange={(e) => setBookingForm((prev: any) => ({ ...prev, luggage: e.target.value }))} /> */}
                </div>
              </div>
              <button className={styles.bookButton}>
                <div className={styles.bookNow} onClick={handleSubmit}>Book Now</div>
              </button>
            </form>
            {/* <img
              className={styles.formLayoutChild}
              alt=""
              src="/easily-line.svg"
            /> */}
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
      </div >
      <div className={styles.formContentIcon}>
        <img
          className={styles.bgframe}
          alt=""
          src="/form-content.svg"
        />
        <img className={styles.car21} alt="" src="/car-2-1@2x.png" />

      </div>
    </section >
  );
};

export default Header;
