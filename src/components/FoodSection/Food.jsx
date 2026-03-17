import { useState } from "react";
import "./Food.css";

const Food = ({ food, handleDisplayCard,removeCard }) => {
  const [value, setValue] = useState(false);

  const handleColorAdd = () => {
    setValue(!value);
  };

  return (
    <div>
      <div className={`${value ? "food-color" : "food-img"}`}>
        <div className={`food-img ${value ? "food-color" : "food-img"}`}>
          <img src={food.strMealThumb} alt="" />
        </div>
        {/* details*/}
        <div>
          <h3>Name: {food.strIngredient1}</h3>
          <h3>Category: {food.strCategory}</h3>
        </div>

        <h3>Area: {food.strArea}</h3>


        <button
          className="food-btn"
          onClick={() => {
            handleDisplayCard(food);
            handleColorAdd();
          }}
        >
          {value ? "Added Cart" : "Add Cart"}
        </button>

        <button className="food-btn" 
        onClick={removeCard}
        >Remove
        
        </button>
      </div>
    </div>
  );
};

export default Food;
