"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Card.scss");
var Row_tsx_1 = require("../Row/Row.tsx");
var react_1 = require("react");
function Card(_a) {
    var food = _a.food, otherFood = _a.otherFood;
    var rowsToAdd = [];
    var nutrientNames = [
        "weight",
        "calories",
        "kilojoules",
        "protein",
        "carbohydrates",
        "sugar",
        "fibre",
        "fat",
        "calcium",
        "iron",
        "sodium",
        "potassium",
        "magnesium",
        "phosphorus",
        "vitaminA",
        "betaCarotene",
        "lycopene",
        "folate",
        "vitaminC",
        "vitaminB12"
    ];
    var nutrientNamesFormatted = [
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
    for (var _i = 0, nutrientNames_1 = nutrientNames; _i < nutrientNames_1.length; _i++) {
        var nutrientName = nutrientNames_1[_i];
        var difference = void 0;
        if (otherFood) {
            var foodValue = food[nutrientName];
            var otherFoodValue = otherFood[nutrientName];
            if (Number(foodValue) && Number(otherFoodValue)) {
                difference = Number(foodValue) - Number(otherFoodValue);
            }
            else if (foodValue === "tr" && otherFoodValue === "tr") {
                difference = null;
            }
            else if (foodValue === "tr") {
                difference = 0 - (Number(otherFoodValue) ? Number(otherFoodValue) : 0);
            }
            else if (otherFoodValue === "tr") {
                difference = (Number(foodValue) ? Number(foodValue) : 0) - 0;
            }
            else {
                difference = null;
            }
        }
        else {
            difference = null;
        }
        console.log(food[nutrientName]);
        rowsToAdd.push(<Row_tsx_1.default nutrient={nutrientNamesFormatted[nutrientNames.indexOf(nutrientName)]} amount={food[nutrientName]} key={food.name + nutrientName} difference={difference}/>);
    }
    return (<div className="card" style={{ backgroundColor: food.color }}>
      <h1>{food.name}</h1>
      <p className="headers">Nutrient</p>
      <p className="headers header-amount">Amount</p>{" "}
      <p className="headers">Difference</p>
      {rowsToAdd}
    </div>);
}
exports.default = Card;
