import React from "react";
import "../style/program.scss";

interface dateProps {
  date?: Date;
}
export const Program: React.FC<dateProps> = ({ date }) => {
  console.log(date);

  return <div></div>;
};
