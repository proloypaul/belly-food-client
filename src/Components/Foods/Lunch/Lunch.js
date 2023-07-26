import React from "react";
import { Link } from "react-router-dom";
import { CommonCodeOne } from "../../../CommonStyle/CommonCode";
import { ThreeCircles } from "react-loader-spinner";

const Lunch = () => {
  const { foodsData, loader } = CommonCodeOne();
  return (
    <div className="breakfastContainer">
      {loader? <div className="loaderStyle">
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="crimson"
            innerCircleColor="black"
            middleCircleColor="crimson"
          />
        </div>:<div className="breakfastFoods">
        {foodsData.slice(7, 13).map((food) => (
          <Link
            to={`/foodDetails/${food._id}`}
            key={food._id}
            className="allFoods"
          >
            <div className="foods">
              <img
                src={food.imgOne}
                alt="Empty!"
                width="150px"
                height="150px"
              />
              <p className="foodName">{food.name}</p>
              <p className="foodMsg">{food.msg}</p>
              <h4 className="foodPrice">${food.price}</h4>
            </div>
          </Link>
        ))}
      </div>}
      
      <div className="checkoutFood">
        <Link to="/allFood">
          <button className="checkoutFoodBtn">Checkout Your Food</button>
        </Link>
      </div>
    </div>
  );
};

export default Lunch;
