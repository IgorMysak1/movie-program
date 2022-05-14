import React, { useState } from "react";
import Calendar from "react-calendar";

import "../style/calendarDate.scss";
export const CalendarDate = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return <div>{<Calendar onChange={onChange} value={value} />}</div>;
};
