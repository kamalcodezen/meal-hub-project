import React, { use, useState } from "react";
import Food from "./Food";
import Cart from "../Cart/Cart";
import "./FoodSection.css";

const FoodSection = ({ foodPromise }) => {
  const foodApi = use(foodPromise);
  const allFood = foodApi.meals;

  const [cards, setCards] = useState([]);

  const handleDisplayCard = (food) => {
    setCards([...cards, food]);
  };

  return (
    <div>
      <h1>Food Section</h1>

      <div style={{ width: "75%" }} className="food-container-parent">
        <div className="food-container">
          {allFood.map((food) => (
            <Food food={food} handleDisplayCard={handleDisplayCard}></Food>
          ))}
        </div>

        <div style={{ width: "25%" }} className="add-cart">
          {cards.map((cart) => (
            <Cart cart={cart}></Cart>
          ))}
        </div>


        
      </div>
    </div>
  );
};

export default FoodSection;
