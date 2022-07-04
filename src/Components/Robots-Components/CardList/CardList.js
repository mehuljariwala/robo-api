import React from "react";
import Card from "../Card/Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("NOOOOOOO");
  // }
  const cardComponent = robots.map((user, index) => (
    <Card name={user.name} id={user.id} key={index} />
  ));
  return <>{cardComponent}</>;
};

export default CardList;
