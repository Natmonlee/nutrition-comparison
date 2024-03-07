import Food from "../../Classes-and-Types/Food.tsx";
import React from "react";
import Card from "../Card/Card.tsx";

type ComparisonProps = {
    veg1: Food, 
    veg2: Food
};

function Comparison({veg1, veg2} : ComparisonProps) {
  return (
    <>
      <Card food={veg1} otherFood={veg2}/>
      <Card food={veg2} otherFood={veg1}/>
    </>
  );
}

export default Comparison;
