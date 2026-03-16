import React from 'react';

const Food = ({food}) => {

    console.log(food)

    return (
        <div>
      <div>
        <img src={food.strMealThumb} alt=""/>
      </div>
            
        </div>
    );
};

export default Food;