import Food from "../../Classes-and-Types/Food.tsx";
import "./Card.scss";
import Row from "../Row/Row.tsx";
import React from "react";

type CardProps = {
  food: Food;
  otherFood?: Food;
};

function Card({ food, otherFood }: CardProps) {
  const rowsToAdd: React.ReactNode[] = [];
  const nutrientNames: string[] = [
    "Weight_g",
    "Energy_kcal",
    "Energy_kj",
    "Protein_g",
    "Carbohydrate_g",
    "TotalSugar_g",
    "TotalDietaryFibre_g",
    "TotalFat_g",
    "Calcium_mg",
    "Iron_mg",
    "Sodium_mg",
    "Potassium_mg",
    "Magnesium_mg",
    "Phosphorus_mg",
    "VitaminARAE",
    "BetaCarotene_mcg",
    "Lycopene_mcg",
    "FolateDFE",
    "VitaminC_mg",
    "VitaminB12_mcg"
  ];

  const nutrientNamesFormatted: string[] = [
    "Weight(g)",
    "Energy(kcal)",
    "Energy(kj)",
    "Protein(g)",
    "Carbohydrate(g)",
    "Total Sugar(g)",
    "Total Dietary Fibre(g)",
    "Total Fat(g)",
    "Calcium(mg)",
    "Iron(mg)",
    "Sodium(mg)",
    "Potassium(mg)",
    "Magnesium(mg)",
    "Phosphorus(mg)",
    "Vitamin A(RAE)",
    "Beta-carotene(mcg)",
    "Lycopene(mcg)",
    "Folate(DFE)",
    "Vitamin C(mg)",
    "Vitamin B12(mcg)"
  ];

  for (const nutrientName of nutrientNames) {
    let difference;
    const foodValue = food[nutrientName];
    if (otherFood) {
      const otherFoodValue = otherFood[nutrientName];
  
      if (Number(foodValue) && Number(otherFoodValue)) {
          difference = Number(foodValue) - Number(otherFoodValue);
      } else if (foodValue === "tr" && otherFoodValue === "tr") {
          difference = null;
      } else if (foodValue === "tr") {
          difference = 0 - (Number(otherFoodValue) ? Number(otherFoodValue) : 0);
      } else if (otherFoodValue === "tr") {
          difference = (Number(foodValue) ? Number(foodValue) : 0) - 0;
      } else {
          difference = null; 
      }
  } else {
      difference = null;
  }

    rowsToAdd.push(
      <Row
        nutrient={nutrientNamesFormatted[nutrientNames.indexOf(nutrientName)]}
        amount={foodValue ? foodValue: null}
        key={food.name + nutrientName}
        difference={
          difference
        }
      />
    );
  }

  return (
    <div className="card" style={{ backgroundColor: food.color }}>
      <h1>{food.FoodName} <br/> {food.Measure}</h1>
      <p className="headers">Nutrient</p>
      <p className="headers header-amount">Amount</p>{" "}
      <p className="headers">Difference</p>
      {rowsToAdd}
    </div>
  );
}

export default Card;
