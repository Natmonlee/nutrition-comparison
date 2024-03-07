import "./App.scss";
import React, { useEffect, useState } from "react";
import Comparison from "./Components/Comparison/Comparison.tsx";
//import vegData from './Data/database.tsx';
import "./Components/Comparison/Comparison.scss";
import Food from "Classes-and-Types/Food.tsx";

interface json {
  data: object[];
}

function App() {

  const [jsonData, setJsonData] = useState<json>();
  const [foodOne, setFoodOne] = useState<Food>();
  const [foodTwo, setFoodTwo] = useState<Food>();



  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/data");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setJsonData(data);
      console.log(data.data[0]);

      setFoodOne(data.data[17]);
      setFoodTwo(data.data[81]);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="App">
       { foodOne && foodTwo ? <Comparison veg1={foodOne} veg2={foodTwo} /> : null }
       {/* // <Comparison veg1={vegData.carrot} veg2={vegData.aubergine} /> */}
    </div>
  );
}

export default App;
