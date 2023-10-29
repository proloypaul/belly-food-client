import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import "./FoodDetains.css";
import Swal from "sweetalert2";
import Usefirebase from "../../../Hooks/Usefirebase";
import {
  handleDecrementBtn,
  handleIncrementBtn,
} from "../../../CommonStyle/CommonCode";
import DisplayUserReview from "../../DisplayUserReview/DisplayUserReview";
import { usePostCartDataMutation } from "../../../redux/features/api/apiSlice";
import { Spinner } from "@material-tailwind/react";


const FoodDetails = () => {
  const { id } = useParams();
  const { user } = Usefirebase();
  const [foodDetailsData, setFoodDetailsData] = useState([]);
  const [postedCart, setPostedCart] = useState([]);
  let [price, setPrice] = useState(0); // this state use in commonCode file
  let [foodNumber, setFoodNumber] = useState(0); // this state use in commonCode file

  const [postedCartData, {isLoading, isSuccess}] = usePostCartDataMutation()
  // loaded single data
  useEffect(() => {
    const url = `https://belly-food-server.onrender.com/foods/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoodDetailsData(data);
      });

    // load posted carts
    const urlTwo = `https://belly-food-server.onrender.com/carts`;
    fetch(urlTwo)
      .then((res) => res.json())
      .then((data) => {
        setPostedCart(data);
      });
  }, [id]);

  // if cart was add to database
  let alreadyAddedToCart = false;
  postedCart.map((cart) => {
    if (foodDetailsData._id === cart.food_id && user?.email === cart?.email) {
      alreadyAddedToCart = true;
    }
    return 0;
  });
  // select food for carts
  const handleCarts = () => {
    const cartsData = {
      food_id: foodDetailsData._id,
      name: foodDetailsData.name,
      foodTitle: `${foodDetailsData.type} Food`,
      image: foodDetailsData.imgOne,
      price: price ? price : foodDetailsData.price,
      describe: foodDetailsData.description,
      foodNum: foodNumber ? foodNumber : 1,
      delivery_free: 1,
      email: user?.email,
      date: new Date().toLocaleDateString(),
    };

    const options = {
      data: cartsData
    }
  
    postedCartData(options)

    // const url = `https://belly-food-server.onrender.com/carts`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(cartsData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire("!Well Done", "cart added Successfully", "success");
    //     }
    //   })
    //   .catch((error) => {
    //     // console.log(error.message);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: `${error.message}`,
    //     });
    //   });
  };

  if(isSuccess){
    Swal.fire("!Well Done", "cart added Successfully", "success");
  }

  return (
    <>
      <div className="foodDetailsContainer">
        <div className="foodDetail">
          <p className="detailName">{foodDetailsData.name}</p>
          <p className="detailDescription">{foodDetailsData.description}</p>
          <div className="quantite">
            <h3 className="detailPrice">
              $ {price ? price : foodDetailsData.price}
            </h3>
            <div className="quantiteBtn">
              <button
                className="quantiteMaxBtn"
                onClick={
                  () =>
                    handleIncrementBtn(
                      foodDetailsData,
                      price,
                      setPrice,
                      foodNumber,
                      setFoodNumber
                    )
                  // handleIncrementBtn funciton come from commonCode file
                }
              >
                <abbr title="Click again">+</abbr>
              </button>
              <h4 className="quantiteNumber">{foodNumber ? foodNumber : 1}</h4>
              <button
                className="quantiteMinBtn"
                onClick={
                  () =>
                    handleDecrementBtn(
                      foodDetailsData,
                      price,
                      setPrice,
                      foodNumber,
                      setFoodNumber
                    )
                  // handleDecrementBtn funciton come from commonCode file
                }
              >
                -
              </button>
            </div>
          </div>
          {alreadyAddedToCart && user?.email ? (
            <Link to="/carts">
              <button className="addToCartBtnSuccess">
                <BsCartDash />
                Already Added
              </button>
            </Link>
          ) : (
            user?.email ?
            <Link to="/carts">
              <button className="addToCartBtn" onClick={handleCarts}>
              {isLoading? `${<Spinner color="pink" />} Processing..`: <div className="flex items-center"><BsCartDash /> <span>Add To cart</span></div>}
              </button>
            </Link> : <Link to="/signIn">
              <button className="addToCartBtn">
                <BsCartDash /> Add To cart
              </button>
            </Link>
          )}
          <div className="relatedImg">
            <div className="flex">
              <Link to="/allFood">
                <img
                  src={foodDetailsData.imgTwo}
                  alt="Empty!"
                  width="100px"
                  height="100px"
                />
              </Link>
              <Link to="/allFood">
                <img
                  src={foodDetailsData.imgThree}
                  alt="Empty!"
                  width="100px"
                  height="100px"
                />
              </Link>
              <Link to="/allFood">
                <img
                  src={foodDetailsData.imgFour}
                  alt="Empty!"
                  width="100px"
                  height="100px"
                />
              </Link>
            </div>
            <Link to="/allFood">
              <p className="rightIcon">
                <AiOutlineRight />
              </p>
            </Link>
          </div>
        </div>
        <div className="detailImg">
          <img
            src={foodDetailsData.imgOne}
            alt="Empty!"
            width="400px"
            height="400px"
          />
        </div>
      </div>

      {/* display user reviews section */}
      <DisplayUserReview/>

    </>
  );
};

export default FoodDetails;
