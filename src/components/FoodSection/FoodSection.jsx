import React, { use } from "react";
import Food from "./Food";
import "./FoodSection.css";

const FoodSection = ({ foodPromise }) => {
  const foodApi = use(foodPromise);
  const allFood = foodApi.meals;

  return (
    <div>
      <h1>Food Section</h1>
      
      <div style={{ width: "75%" }} className="food-container-parent">
        <div className="food-container">
          {allFood.map((food) => (
            <Food food={food}></Food>
          ))}
        </div>

        <div style={{ width: "25%" }} className="add-cart">
         
         


         
        </div>
      </div>
    </div>
  );
};

export default FoodSection;
