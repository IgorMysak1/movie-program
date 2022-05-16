import React, { useState, Dispatch, SetStateAction } from "react";
import { CalendarDate } from "./index";
import "../style/chooseDate.scss";

interface ChooseDateProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export const ChooseDate: React.FC<ChooseDateProps> = ({ date, setDate }) => {
  return (
    <div className="chooseDate">
      <div className="chooseDate__content">
        <img style={{ height: 120, width: 160 }} src="img/tv.jpg" alt="TV" />
        <p>To get a list of series, select the desired date and month</p>
      </div>
      <div className="chooseDate__date">
        <CalendarDate date={date} setDate={setDate} />
      </div>
    </div>
  );
};
