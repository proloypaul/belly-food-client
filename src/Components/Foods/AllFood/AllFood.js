import React from "react";
import { Link } from "react-router-dom";
import { CommonCodeOne } from "../../../CommonStyle/CommonCode";
import { ThreeCircles } from "react-loader-spinner";

const AllFood = () => {
  const { foodsData, loader } = CommonCodeOne();
  return (
    <div className="breakfastContainer">
      {<div className="breakfastFoods">
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
        </div>: foodsData.map((food) => (
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

    </div>
  );
};

export default AllFood;
