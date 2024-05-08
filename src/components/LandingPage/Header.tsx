import { FunctionComponent } from "react";
import styles from "../../Assets/css/Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <section className={styles.header}>
      <header className={styles.uSPLayout}>
        <div className={styles.treeStructure}>
          <div className={styles.uSPItems}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <div className={styles.rentalSteps}>
              <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
            </div>
          </div>
          <nav className={styles.benefitItemsWrapper}>
            <nav className={styles.benefitItems}>
              <div className={styles.popularDestinations}>
                Popular Destinations
              </div>
              <div className={styles.businessAccount}>Business Account</div>
              <div className={styles.operatorSignup}>Operator Signup</div>
              <div className={styles.help}>Help?</div>
            </nav>
          </nav>
          <div className={styles.authentication}>
            <div className={styles.authOptions}>
              <div className={styles.signInButton}>
                <div className={styles.signIn}>Sign in</div>
              </div>
              <div className={styles.signUpWrapper}>
                <div className={styles.signUp}>Sign up</div>
              </div>
            </div>
          </div>
        </div>
      </header>
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
                <div className={styles.inputBox}>
                  <div className={styles.enterPickUp}>Enter Pick Up Location</div>
                </div>
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
                  <div className={styles.dropOffLocation}>
                    <div className={styles.enterDropLocation}>
                      Enter Drop Location
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tripType}>
                <div className={styles.tripOptions}>
                  <div className={styles.typeButtons}>
                    <div className={styles.oneWay}>One Way</div>
                    <div className={styles.return}>Return</div>
                  </div>
                  <div className={styles.datePickers}>
                    <div className={styles.datePickerLayout}>
                      <div className={styles.selectDateWrapper}>
                        <div className={styles.selectDate}>Select Date</div>
                      </div>
                      <div className={styles.endDatePicker}>
                        <div className={styles.selectDate1}>Select Date</div>
                      </div>
                    </div>
                    <div className={styles.timePickerLayout}>
                      <div className={styles.selectTimeWrapper}>
                        <div className={styles.selectTime}>Select Time</div>
                      </div>
                      <div className={styles.endTimePicker}>
                        <div className={styles.selectTime1}>Select Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.travelers}>
                <div className={styles.travelerOptions}>
                  <div className={styles.passengers}>Passengers</div>
                </div>
                <div className={styles.luggageCount}>
                  <div className={styles.luggage}>Luggage</div>
                </div>
              </div>
              <div className={styles.bookButton}>
                <div className={styles.bookNow}>Book Now</div>
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
