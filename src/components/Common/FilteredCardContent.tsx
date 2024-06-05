import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../Assets/css/FilteredCardContent.module.css";
import { useRecoilState } from "recoil";
import { selectedCarState } from "../../stores/atoms";
import { useNavigate } from "react-router-dom";

export type FilteredCardContentType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  data?: any;
  setLoading: Function
};

const FilteredCardContent: FunctionComponent<FilteredCardContentType> = ({
  propFlex,
  propMinWidth,
  propWidth,
  data,
  setLoading
}) => {
  const [selectedCar, setSelectedCar] = useRecoilState(selectedCarState)
  const filteredCardContentStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);
  const naviagate = useNavigate()

  const handleBooking = () => {
    setLoading(true)
    setSelectedCar(data);
    naviagate('/car-booking')
    setLoading(false)
  }

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getRandomRating(min: number, max: number) {
    return (Math.random() * (max - min) + min).toFixed(1);
}
  return (
    <div
      className={styles.filteredCardContent}
      style={filteredCardContentStyle}
    >
      <div className={styles.filteredCarImageArea}>
        <div className={styles.filteredCarImageAreaChild} />
        <img
          className={styles.image12Icon}
          loading="lazy"
          alt=""
          src={data?.imageUrl ? data?.imageUrl : "/image-12@2x.png"}
        />
      </div>
      <div className={styles.filteredCarDetailsArea}>
        <div className={styles.filteredCarInfoArea}>
          <div className={styles.filteredCarNameArea}>
            <div className={styles.saloonCarParent}>
              <div className={styles.saloonCar}>{data.brand_name}</div>
              <div className={styles.filteredRatingArea}>
                <img
                  className={styles.filteredStarIcon}
                  alt=""
                  src="/rating-stars.svg"
                />
                <div className={styles.reviews}>
                  <span>
                    <span className={styles.span}>{getRandomRating(4, 5)}</span>
                  </span>
                  <span className={styles.reviews1}>
                    <span>{` `}</span>
                    <span>({getRandomInt(1, 5000)} reviews)</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.filteredCarSpecsArea}>
              <div className={styles.filteredPassengerSpecArea}>
                <div className={styles.vuesaxlinearuserParent}>
                  <img
                    className={styles.vuesaxlinearuserIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearuser.svg"
                  />
                  <div className={styles.passagers}>{data.car_seats} Passagers</div>
                </div>
                <div className={styles.filteredTransmissionArea}>
                  <img
                    className={styles.frameIcon}
                    loading="lazy"
                    alt=""
                    src="/briefcase.svg"
                  />
                  <div className={styles.auto}>{data.luggage_count} Luggage</div>
                </div>
              </div>
              <div className={styles.filteredAcSpecArea}>
                {data.name}
                {/* <div className={styles.filteredAcIconParent}>
                  <img
                    className={styles.filteredAcIcon}
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className={styles.airConditioning}>Air Conditioning</div>
                </div>
                <div className={styles.filteredDoorSpecArea}>
                  <img
                    className={styles.frameIcon1}
                    alt=""
                    src="/frame-3.svg"
                  />
                  <div className={styles.doors}>4 Doors</div>
                </div> */}
              </div>
            </div>
          </div>
          <div className={styles.filteredSeparator} />
          <button className={styles.filteredBookingArea} onClick={handleBooking}>
            <div className={styles.rentNowWrapper}>
              <div className={styles.rentNow} >£{data.vehiclePrice}</div>
            </div>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              alt=""
              src="/vuesaxlineararrowright.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilteredCardContent;
