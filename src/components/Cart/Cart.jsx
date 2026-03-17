const Cart = ({ cart, removeCard }) => {
  return (
    <div>
      <div>
        <div className="food-img">
          <img src={cart.strMealThumb} alt="" />
        </div>
        {/* details*/}
        <div>
          <h3>Name: {cart.strIngredient1}</h3>
          <h3>Category: {cart.strCategory}</h3>
        </div>

        <span>Area: {cart.strArea}</span>

        <button onClick={removeCard} className="food-btn">
          Remove Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
