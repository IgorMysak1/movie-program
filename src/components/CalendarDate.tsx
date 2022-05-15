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
    navigate("/movies");
  };
  return (
    <>
      <Calendar
        showFixedNumberOfWeeks
        onChange={changeDate}
        locale="en"
        value={date}
      />
    </>
  );
};
