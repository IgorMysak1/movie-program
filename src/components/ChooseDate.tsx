import React, { useState, Dispatch, SetStateAction } from "react";
import { CalendarDate } from "./CalendarDate";
import "../style/chooseDate.scss";

interface ChooseDateProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export const ChooseDate: React.FC<ChooseDateProps> = ({ date, setDate }) => {
  return (
    <div className="chooseDate">
      <div className="chooseDate__content">
        <img src="img/tv.jpg" alt="TV" />
        <p>Щоб отримати список серіалів, виберіть необхідну дату та місяць</p>
      </div>
      <div className="chooseDate__date">
        <CalendarDate date={date} setDate={setDate} />
      </div>
    </div>
  );
};
