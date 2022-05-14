import React, { Dispatch, SetStateAction } from "react";
import { Routes, Route } from "react-router-dom";
import { ChooseDate } from "../components/ChooseDate";
import { Programs } from "../components/Programs";

interface RouterConfigProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}
export const RouterConfig: React.FC<RouterConfigProps> = ({
  date,
  setDate,
}) => {
  return (
    <Routes>
      <Route path="/" element={<ChooseDate date={date} setDate={setDate} />} />
      <Route path="/program" element={<Programs date={date} />} />
    </Routes>
  );
};
