import React from "react";
import { CalendarDate } from "./CalendarDate";
import "../style/chooseDate.scss";

export const ChooseDate = () => {
  return (
    <div className="chooseDate">
      <div className="chooseDate__content">
        <img src="img/tv.jpg" alt="TV" />
        <p>Щоб отримати список серіалів, виберіть необхідну дату та місяць</p>
      </div>
      <div className="chooseDate__date">
        <CalendarDate />
      </div>
    </div>
  );
};
