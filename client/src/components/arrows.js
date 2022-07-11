import React from "react";
import upArr from "../assets/icons/upArrow.svg";
import downArr from "../assets/icons/downArrow.svg";

export const UpArrow = () => {
  return (
    <>
      <img width="10px" src={upArr} alt="up-arrow" />
    </>
  );
};

export const DownArrow = () => {
  return (
    <>
      <img width="10px" src={downArr} alt="down-arrow" />
    </>
  );
};
