import React from "react";
import "./SchoolCard.css";

const SchoolCard = ({ school }) => {
  return (
    <ul className="containerSchool">
      <li>School name : {school.schoolName}</li>
      <li>Street :{school.address.street}</li>
      <li>City : {school.address.city}</li>
      <li>State : {school.address.stateFull}</li>
    </ul>
  );
};

export default SchoolCard;
