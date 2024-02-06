import Vegetable from "../../Classes-and-Types/Vegetable.tsx";
import React from "react";
import Card from "../Card/Card.tsx";

type ComparisonProps = {
    veg1: Vegetable, 
    veg2: Vegetable
};

function Comparison({veg1, veg2} : ComparisonProps) {
  return (
    <>
      <Card vegetable={veg1} otherVegetable={veg2}/>
      <Card vegetable={veg2} otherVegetable={veg1}/>
    </>
  );
}

export default Comparison;
