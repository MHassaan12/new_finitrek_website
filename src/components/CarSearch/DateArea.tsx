import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
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
  setLoading: Function
};

const DateArea: FunctionComponent<DateAreaType> = ({
  selectDate,
  selectDate1,
  propFlex,
  propMinWidth,
  propAlignSelf,
  setLoading
}) => {
  const bookingCars = useRecoilValue(bookingCarsState);
  const [tabs, setTabs] = useState('all')
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
            <div className={styles.tabList} style={{backgroundColor: tabs == 'all'? "var(--color-purple-100)": 'var(--color-lavenderblush)'}} onClick={()=>setTabs('all')}>
              <div className={styles.all} style={{color: tabs == 'all'? "var(--color-white)": 'var(--color-purple-100)'}}>All</div>
            </div>
            <div className={styles.tabList1} style={{backgroundColor: tabs == 'popular'? "var(--color-purple-100)": 'var(--color-lavenderblush)'}} onClick={()=>setTabs('popular')}>
              <div className={styles.popular} style={{color: tabs == 'popular'? "var(--color-white)": 'var(--color-purple-100)'}}>Popular</div>
            </div>
            <div className={styles.tabList2} style={{backgroundColor: tabs == 'latest'? "var(--color-purple-100)": 'var(--color-lavenderblush)'}} onClick={()=>setTabs('latest')}>
              <div className={styles.latest} style={{color: tabs == 'latest'? "var(--color-white)": 'var(--color-purple-100)'}}>Latest</div>
            </div>
            <div className={styles.tabList3} style={{backgroundColor: tabs == 'tranding'? "var(--color-purple-100)": 'var(--color-lavenderblush)'}} onClick={()=>setTabs('tranding')}>
              <div className={styles.trending} style={{color: tabs == 'tranding'? "var(--color-white)": 'var(--color-purple-100)'}}>Trending</div>
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
                setLoading={setLoading}
              />
            ))
          }
        </div>

      </section>
    </div>
  );
};

export default DateArea;
