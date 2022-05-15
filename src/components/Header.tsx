import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>SuperFilm</h1>
      {window.location.href.includes("movies") && (
        <img onClick={() => navigate("/")} src="img/ArrowBack.svg" alt="Back" />
      )}
    </div>
  );
};
