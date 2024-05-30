import { FC } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../Assets/css/Header.module.css"

interface IDatePickerProps {
  setStart: Function;
  start: Date;
  disabled: boolean;
  minDate: Date
}

const DatePickerComponent: FC<IDatePickerProps> = ({ setStart, start, disabled, minDate }) => {
  return <ReactDatePicker minDate={minDate} selected={start} onChange={(date: Date) => setStart(date)} className={styles.selectDate} dateFormat="dd MMMM" disabled={disabled} />;
};

export default DatePickerComponent;
