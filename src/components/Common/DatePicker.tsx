import { FC } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../Assets/css/Header.module.css"

interface IDatePickerProps {
  setStart: Function;
  start: Date;
  disabled: boolean
}

const DatePickerComponent: FC<IDatePickerProps> = ({ setStart, start, disabled }) => {
  return <ReactDatePicker minDate={new Date()} selected={start} onChange={(date: Date) => setStart(date)} className={styles.selectDate} dateFormat="dd MMMM" disabled={disabled} />;
};

export default DatePickerComponent;
