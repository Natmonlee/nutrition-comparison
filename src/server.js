import express from "express";
import cors from 'cors';
import sqlite3 from "sqlite3";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Convert the import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name
const __dirname = path.dirname(__filename);

const databasePath = path.resolve(__dirname, 'Data', 'nutrition-data');

const database = new sqlite3.Database(databasePath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(`Error opening database at ${databasePath}: ${err.message}`);
  } else {
    console.log('Connected to the database');
    // Perform operations on the database here
    database.all("SELECT * FROM nutrition", (err, rows) => {
      if (err) {
        console.log({ error: err.message });
        return;
      }
  
      console.log({ data: rows });
    });
  }
});

app.use(cors());

app.get("/data", (req, res) => {
  database.all("SELECT * FROM nutrition", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    res.json({ data: rows });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
