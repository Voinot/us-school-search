import React from "react";
import SchoolCard from "./SchoolCards";

const CardList = ({ results }) => {
  let data = [];
  if (results.data) {
    data = results.data.schoolList || [];
  }

  return (
    <div>
      {data.map((item) => (
        <SchoolCard key={item.schoolList} school={item} />
      ))}
    </div>
  );
};

export default CardList;
