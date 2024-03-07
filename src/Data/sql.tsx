import createText from "./data";
import sqlite3 from "sqlite3";

const database = new sqlite3.Database("./nutrition-data");

const createDatabase = async () => {
  const dataArray = await createText();

  database.serialize(async () => {
    const tableExists = `
      SELECT name FROM sqlite_master WHERE type='table' AND name='nutrition'
    `;

    database.get(tableExists, async (err, row) => {
      if (err) {
        console.error("Error checking table existence:", err);
        return;
      }

      if (!row) {
        database.run(`
              CREATE TABLE nutrition (
                  FoodName TEXT,
                  Measure TEXT,
                  Weight_g TEXT,
                  Energy_kcal TEXT,
                  Energy_kj TEXT,
                  Protein_g TEXT,
                  Carbohydrate_g TEXT,
                  TotalSugar_g TEXT,
                  TotalDietaryFibre_g TEXT,
                  TotalFat_g TEXT,
                  Calcium_mg TEXT,
                  Iron_mg TEXT,
                  Sodium_mg TEXT,
                  Potassium_mg TEXT,
                  Magnesium_mg TEXT,
                  Phosphorus_mg TEXT,
                  VitaminARAE TEXT,
                  BetaCarotene_mcg TEXT,
                  Lycopene_mcg TEXT,
                  FolateDFE TEXT,
                  VitaminC_mg TEXT,
                  VitaminB12_mcg TEXT
              )
          `);

        const insert = database.prepare(`
        INSERT INTO nutrition (
          FoodName, Measure, Weight_g, Energy_kcal, Energy_kj, Protein_g,
          Carbohydrate_g, TotalSugar_g, TotalDietaryFibre_g, TotalFat_g,
          Calcium_mg, Iron_mg, Sodium_mg, Potassium_mg, Magnesium_mg,
          Phosphorus_mg, VitaminARAE, BetaCarotene_mcg, Lycopene_mcg,
          FolateDFE, VitaminC_mg, VitaminB12_mcg
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         `);

        if (dataArray) {
          for (const food of dataArray) {
            await insert.run(
              food.FoodName,
              food.Measure,
              food.Weight_g,
              food.Energy_kcal,
              food.Energy_kj,
              food.Protein_g,
              food.Carbohydrate_g,
              food.TotalSugar_g,
              food.TotalDietaryFibre_g,
              food.TotalFat_g,
              food.Calcium_mg,
              food.Iron_mg,
              food.Sodium_mg,
              food.Potassium_mg,
              food.Magnesium_mg,
              food.Phosphorus_mg,
              food.VitaminARAE,
              food.BetaCarotene_mcg,
              food.Lycopene_mcg,
              food.FolateDFE,
              food.VitaminC_mg,
              food.VitaminB12_mcg
            );
          }
        }

        insert.finalize();
      } else {
        console.log("Table 'nutrition' already exists. Skipping creation.");
      }
      database.each("SELECT * FROM nutrition", (err, rows) => {
        if (err) {
          console.log(err);
        } else {
          
            console.log(rows);
        ;
        }
      });
      database.close();
    });
  });
};

createDatabase();
