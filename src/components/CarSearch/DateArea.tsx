import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../Assets/css/CabSearch.module.css";
import FilteredCardContent from "../Common/FilteredCardContent";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingCarsState } from "../../stores/atoms";

export type DateAreaType = {
  selectDate?: string;
  selectDate1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const DateArea: FunctionComponent<DateAreaType> = ({
  selectDate,
  selectDate1,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const bookingCars = useRecoilValue(bookingCarsState);
  const dateAreaStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div className={styles.timeArea}>
      <section className={styles.carListingArea}>
        <div className={styles.listingFilterArea}>
          <div className={styles.filterTabs}>
            <div className={styles.tabList}>
              <div className={styles.all}>All</div>
            </div>
            <div className={styles.tabList1}>
              <div className={styles.popular}>Popular</div>
            </div>
            <div className={styles.tabList2}>
              <div className={styles.latest}>Latest</div>
            </div>
            <div className={styles.tabList3}>
              <div className={styles.trending}>Trending</div>
            </div>
          </div>
        </div>
        <div className={styles.filteredCarCard}>
          {
            bookingCars.map((item: any) => (
              <FilteredCardContent
                propFlex="1"
                propMinWidth="166px"
                propWidth="unset"
                data={item}
              />
            ))
          }
        </div>

      </section>
    </div>
  );
};

export default DateArea;
