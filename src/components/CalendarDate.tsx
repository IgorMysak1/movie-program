import React, { SetStateAction, Dispatch } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "../style/calendarDate.scss";

interface CalendarDateProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export const CalendarDate: React.FC<CalendarDateProps> = ({
  date,
  setDate,
}) => {
  const navigate = useNavigate();
  const changeDate = (e: Date): void => {
    setDate(e);
    navigate("/program");
  };
  return (
    <>
      <Calendar onChange={changeDate} value={date} />
    </>
  );
};
