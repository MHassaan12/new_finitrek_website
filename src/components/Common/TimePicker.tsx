import { useRef, useEffect, useState, useCallback, FC } from "react";
import { TimepickerUI } from "timepicker-ui";
import styles from "../../Assets/css/Header.module.css"

interface IDetailProps {
  hour: number;
  minutes: number;
  type: number;
}

interface ITimePickerProps {
  setTime: Function,
  time: string,
  disabled: boolean
}

const TimePicker: FC<ITimePickerProps> = ({ setTime, time, disabled }) => {
  const tmRef = useRef<HTMLDivElement>(null);


  const testHandler = useCallback(({ detail: { hour, minutes, type } }: CustomEvent<IDetailProps>) => {
    setTime(`${hour}:${minutes} ${type}`);
  }, []);

  useEffect(() => {
    if (time === "10:00 PM") {
      alert("You selected 10:00 PM");
    }
  }, [time]);

  useEffect(() => {
    const tm = tmRef.current as any;

    const newPicker = new TimepickerUI(tm, {});
    newPicker.create();

    tm.addEventListener("accept", testHandler);

    return () => {
      tm.removeEventListener("accept", testHandler);
    };
  }, [testHandler]);

  return (
    <div ref={tmRef}>
      <input type="text" className={styles.selectTime} defaultValue={time} disabled={disabled} placeholder="Select Time" />
    </div>
  );
};

export default TimePicker;
