import React from "react";

import "./Food.css";

const Food = ({ food }) => {
  console.log(food);

  return (
    <div >
      
      <div>
        <div className="food-img">
          <img src={food.strMealThumb} alt="" />
        </div>
        {/* details*/}
        <div>
          <h3>Name: {food.strIngredient1}</h3>
          <h3>Category: {food.strCategory}</h3>
        </div>

        <span>Area: {food.strArea}</span>
        <button className="food-btn">Add Cart</button>
      </div>

    </div>
  );
};

export default Food;
