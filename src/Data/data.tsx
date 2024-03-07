import Food from "../Classes-and-Types/Food.tsx";
import { promises as fs } from "fs";

const createText = async () => {
  try {
    let foodArray = [];
    const nutritionText = await fs.readFile(
      "./src/Data/nutrition-text.txt",
      "utf-8"
    );
    const splitNutritionText = nutritionText.split("\r");

    for (const row of splitNutritionText) {
      const rowSplit = row.split(" ");
      const slicePoint = rowSplit.length - 20;
      const nutrients = rowSplit.slice(slicePoint);

      const nameAndMeasure = rowSplit.slice(0, slicePoint).join(" ");

      const numMatch = nameAndMeasure.match(/\d/);

      let name = "";
      let measure = "";
      if (numMatch) {
        const indexOfNum = numMatch.index;
        name = nameAndMeasure.slice(0, indexOfNum).trim();
        measure = nameAndMeasure.slice(indexOfNum);
      }

      const food = new Food(
        name,
        measure,
        nutrients[0],
        nutrients[1],
        nutrients[2],
        nutrients[3],
        nutrients[4],
        nutrients[5],
        nutrients[6],
        nutrients[7],
        nutrients[8],
        nutrients[9],
        nutrients[10],
        nutrients[11],
        nutrients[12],
        nutrients[13],
        nutrients[14],
        nutrients[15],
        nutrients[16],
        nutrients[17],
        nutrients[18],
        nutrients[19]
      );   

      foodArray.push(food);
      
    }
      return foodArray;
  } catch (err) {
    console.error(err);
  }
};

createText();

export default createText;
