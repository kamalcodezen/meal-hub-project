import React, { useState } from "react";

const Cart = (cart) => {


  return (
    <div>
      <div>
        <div className="food-img">
          <img src={cart.cart.strMealThumb} alt="" />
        </div>
        {/* details*/}
        <div>
          <h3>Name: {cart.cart.strIngredient1}</h3>
          <h3>Category: {cart.cart.strCategory}</h3>
        </div>

        <span>Area: {cart.cart.strArea}</span>
        <button onClick={()=>handleCartRemove(cart)} className="food-btn">Remove Cart</button>
      </div>
    </div>
  );
};

export default Cart;
