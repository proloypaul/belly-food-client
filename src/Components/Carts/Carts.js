import React, { useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import "./Carts.css";
import { useNavigate } from "react-router-dom";
import { deleteUserCarts, handleDltCart } from "../../CommonStyle/CommonCode";
import Swal from "sweetalert2";
// import { useGetCartDataQuery } from "../../redux/features/api/apiSlice";
import Usefirebase from "../../Hooks/Usefirebase";



const Carts = () => {
  const {user} = Usefirebase() 
  const [cartsData, setCartsData] = useState([]);
  const [saveData, setSaveData] = useState({});
  const navigate = useNavigate()

  // if(user && user?.email){
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const {data} = useGetCartDataQuery(user?.email)
  //   console.log("email", user.email)
  //   console.log("email", data)
    
  // }
    
  
  //fetch carts data according to user email
  try{
    useEffect(() => {
      const url = `https://belly-food-server.onrender.com/carts/${user.email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCartsData(data);
        });
    }, [user.email]);
    
  
  }catch(error){
    console.log(error)

  }
  
  // reload page using program
  // console.log("cart of food", cartsData.length)
  // if(cartsData.length === 0){
  //   Swal.fire({
  //     title: 'Click Only One Time To Get Your Cart?',
  //     showDenyButton: true,
  //     // showCancelButton: true,
  //     confirmButtonText: 'Get Cart',
  //     denyButtonText: `Don't Needed`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       // Swal.fire('Saved!', '', 'success')
  //       window.location.reload()
  //     } else if (result.isDenied) {
  //       if(cartsData.length === 0 ){
  //         Swal.fire('Sorry! Your Cart Is Empty! Now. Navigate Again & Click Get Cart', '', 'info')
  //       }else{
  //         Swal.fire('Wow! Now You Can Place Order', '', 'info')
  //       }
  //     }
  //   })
  // }

  //   set subtotal of food order
  let subtotal = 0;
  cartsData?.map((cart) => {
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
    // console.log(saveData);
  };

  const handlePlaceOrder = () => {
    if (saveData.YourLocation && saveData.DeliveryTo && saveData.FlatSuiteFloor && cartsData) {
      // console.log("You are ready to order Now");

      // sent order to server
      const orderedAllData = {
        DeliveryTo: saveData.DeliveryTo,
        location: saveData.YourLocation,
        FlatAndFloor: saveData.FlatSuiteFloor,
        FoodItem: [...cartsData],
        subTotalPrice: subtotal,
        totalPriceWithTaxAndDeliver: totalPriceWithTax,
        email: user?.email,
        name: user?.displayName,
        date: new Date().toLocaleDateString()
      }
      
      const url = `https://belly-food-server.onrender.com/orderinformation`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderedAllData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("!Well Done", "Order added Successfully", "success");
            // setCartsData([])
            deleteUserCarts(user?.email)
            navigate("/myProfile")
          }
        })
        .catch((error) => {
          // console.log(error.message);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error.message}`,
          });
        });


    } else {
      Swal.fire(
        "Forgate SomeThing...?",
        "Do not forgate to Save & Continue Your Location?",
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
            required
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
            name="FlatSuiteFloor"
            placeholder="Flat, suite or floor"
            onBlur={collectSaveData}
            required
          />
          <input
            type="text"
            name="BussinessName"
            placeholder="Bussiness Name"
            onBlur={collectSaveData}
          />
          <input
            type="text"
            name="deliverInstructor"
            placeholder="Add deliver Instructor"
            onBlur={collectSaveData}
          />
          {saveData.YourLocation && saveData.DeliveryTo && saveData.FlatSuiteFloor ? (
            <button type="submit" className="saveAndContinueBtnSaved">
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
          <p className="cartTitleTwo py-2">
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
                    {/* <button className="cartBtnOne" onClick={() => handleIncrementBtn(cartsData, inCartprice, setinCartPrice, inCartfoodNumber, setinCartFoodNumber)}>+</button> */}
                    <span className="cartItem">0{cart.foodNum}</span>
                    {/* <span className="cartItem">{inCartfoodNumber}</span> */}
                    {/* <button className="cartBtnOne" onClick={() => handleDecrementBtn(cartsData, inCartprice, setinCartPrice, inCartfoodNumber, setinCartFoodNumber)}>-</button> */}
                    <p className="pt-5 text-center">
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
              <div className="noCarts  py-10 my-10">
                <p className='noCartsTitleOne'>Hey, Checkout our Delicious Foods</p>
                <p className='noCartsTitleOne py-2'>&</p>
                <p className='noCartsTitleOne'>If {"  "} You Added any Order?. Don't Forgat To <button className="commonButtonTwo" onClick={() => window.location.reload()}>Refresh</button> The Page</p>
              </div>
            )}
          </div>
          <div className="cartAmount">
            <div className="cartAmountTitle">
              <p>Subtotal: </p>
              <p className="py-2">Delivery free: </p>
              <p>Tax: </p>
              <p className="pt-2">Total: </p>
            </div>
            <div className="cartAmountTitleValue">
              <p>$ {subtotal}</p>
              <p className="py-2">$ 1</p>
              <p>$ {taxAmount}</p>
              <p className="pt-2">$ {totalPriceWithTax}</p>
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
