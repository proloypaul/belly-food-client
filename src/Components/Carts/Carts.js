import React, { useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsCartDash } from "react-icons/bs";
import "./Carts.css";
import Usefirebase from "../../Hooks/Usefirebase";
import { Link } from "react-router-dom";
import { handleDltCart } from "../../CommonStyle/CommonCode";
import Swal from "sweetalert2";

const Carts = () => {
  const { user } = Usefirebase();
  const [cartsData, setCartsData] = useState([]);
  const [saveData, setSaveData] = useState({});

  // console.log(user?.email);
  //fetch carts data according to user email
  useEffect(() => {
    const url = `http://localhost:3600/carts/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCartsData(data);
      });
  }, [user.email]);

  //   set subtotal of food order
  let subtotal = 0;
  cartsData.map((cart) => {
    const singleCartPrice = cart.price * cart.foodNum;
    subtotal = subtotal + parseInt(singleCartPrice);
    // return subtotal;
    return 0;
  });
  //   console.log(subtotal);

  // get tax according to subtotal price
  const tax = 5 / 100;
  const taxAmount = parseFloat((tax * subtotal).toFixed(2));
  // total price of user order
  const totalPriceWithTax = taxAmount + subtotal + 1; // one is delivery charge of user order

  // collect save and continue data
  const collectSaveData = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const allSaveData = { ...saveData };
    allSaveData[field] = value;
    setSaveData(allSaveData);
    // console.log(field, value);
  };
  // handle save and continue button
  const handleSaveAndContinueData = (event) => {
    event.preventDefault();
    console.log(saveData);
  };

  const handlePlaceOrder = () => {
    if (saveData.YourLocation) {
      console.log("You are ready to order Now");
    } else {
      Swal.fire(
        "Forgate SomeThing...?",
        "Do not forgate to Save & Continue YourLocation?",
        "question"
      );
    }
  };
  return (
    <div className="cartsContainer">
      <div className="editDelivery">
        <form onSubmit={handleSaveAndContinueData}>
          <h1 className="editDeliveryTitle">
            <p className="title">Edit Delibery Details</p>
          </h1>
          {/* <span className='editbottom'></span> */}
          <input
            type="text"
            name="DeliveryTo"
            placeholder="Delivery to ..."
            onBlur={collectSaveData}
          />
          <input
            type="text"
            name="YourLocation"
            placeholder="Your location"
            onBlur={collectSaveData}
            required
          />
          <input
            type="text"
            name="Flat-Suite-floor"
            placeholder="Flat, suite or floor"
            onBlur={collectSaveData}
          />
          <input
            type="text"
            name="Bussiness Name"
            placeholder="Bussiness Name"
            onBlur={collectSaveData}
          />
          <input
            type="text"
            name="deliverInstructor"
            placeholder="Add deliver Instructor"
            onBlur={collectSaveData}
          />
          {saveData.YourLocation ? (
            <button type="submit" className="saveAndContinueBtnSaved" disabled>
              Continue to Place Order
            </button>
          ) : (
            <button type="submit" className="saveAndContinueBtnUnsaved">
              Save & Continue
            </button>
          )}
        </form>
      </div>
      <div className="allCarts">
        <div className="carts">
          <p>
            From <span className="cartTitleOne">Tejgong Restaurant GPR</span>{" "}
          </p>
          <p className="cartTitleTwo">
            Arriving in <span className="cartTitleOne">20-30 min</span>
          </p>
          <p className="cartTitleThree">
            Your location{" "}
            <span className="cartTitleOne">{saveData.YourLocation}</span>
          </p>
          <div>
            {cartsData.length !== 0 ? (
              cartsData.map((cart) => (
                <div key={cart._id} className="allCartsData">
                  <img
                    src={cart.image}
                    alt="Empty!"
                    width="100px"
                    height="100"
                  />
                  <div className="cartPrices">
                    <p className="cartPriceOne">{cart.foodTitle}</p>
                    <p className="cartPriceTwo">${cart.price}</p>
                    <p className="cartPriceThree">
                      Delivery free: ${cart.delivery_free}
                    </p>
                  </div>
                  <div className="cartBtns">
                    <button className="cartBtnOne">+</button>
                    <span className="cartItem">0{cart.foodNum}</span>
                    <button className="cartBtnOne">-</button>
                    <p style={{ textAlign: "right" }}>
                      <button
                        className="cartDltBtn"
                        onClick={
                          () => handleDltCart(cart._id, cartsData, setCartsData) // handleDltCart function come from commonCode file
                        }
                      >
                        <RiDeleteBinFill />
                      </button>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="noCarts">
                {/* <p className='noCartsTitleOne'>Hey, Checkout our Delicious Foods</p>
                            <p className='noCartsTitleOne'>& don't forgat to Add To Carts</p> */}
                <Link to="/allFood">
                  <button className="deliciousBtn">
                    <BsCartDash /> Add To Cart
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="cartAmount">
            <div className="cartAmountTitle">
              <p>Subtotal: </p>
              <p>Delivery free: </p>
              <p>Tax: </p>
              <p>Total: </p>
            </div>
            <div className="cartAmountTitleValue">
              <p>$ {subtotal}</p>
              <p>$ 1</p>
              <p>$ {taxAmount}</p>
              <p>$ {totalPriceWithTax}</p>
            </div>
          </div>
          <button className="checkoutFoodBtn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
