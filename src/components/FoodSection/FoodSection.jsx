import React, { use } from "react";
import Food from "./Food";

const FoodSection = ({ foodPromise }) => {
  const foodApi = use(foodPromise);
  const allFood = foodApi.meals;

  return (
    <div>
      <h1>Food Section</h1>

      <div>
        {allFood.map((food) => (
          <Food food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
