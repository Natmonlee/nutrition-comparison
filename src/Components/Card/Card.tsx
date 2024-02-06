import Vegetable from "../../Classes-and-Types/Vegetable.tsx";
import "./Card.scss";
import Row from "../Row/Row.tsx";
import React from "react";


type CardProps = {
  vegetable: Vegetable;
  otherVegetable?: Vegetable;
};

function Card({ vegetable, otherVegetable }: CardProps) {
  const rowsToAdd: React.ReactNode[] = [];
  for (const nutrient in vegetable.nutrients) {
    rowsToAdd.push(
      <Row nutrient={nutrient} amount={vegetable.nutrients[nutrient] } key={vegetable.name+nutrient} difference={otherVegetable ? vegetable.nutrients[nutrient] - otherVegetable.nutrients[nutrient]: null}/>
    );
  } 

  return (
    <div className="card" style={{ backgroundColor: vegetable.color }}>
      <h1>{vegetable.name}</h1>
      <p className="headers">Nutrient</p><p className="headers header-amount">Amount</p> <p className="headers">Difference</p>
      {rowsToAdd}
    </div>
  );
}

export default Card;
