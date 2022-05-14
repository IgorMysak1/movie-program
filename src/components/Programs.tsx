import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProgramMovies } from "../services/api";
import { createStringfDate } from "../utilits/date";
import { IProgram } from "../types/program";
import "../style/program.scss";

interface dateProps {
  date: Date;
}

export const Programs: React.FC<dateProps> = ({ date }) => {
  const [listOfProgram, setListOfProgram] = useState<IProgram[]>([]);
  useEffect(() => {
    date &&
      (async () => {
        const response = await getProgramMovies(createStringfDate(date));
        setListOfProgram(response);
      })();
  }, []);

  return <div className="progams"></div>;
};
