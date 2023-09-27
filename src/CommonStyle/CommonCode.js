import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Usefirebase from "../Hooks/Usefirebase";


export const CommonCodeOne = () => {
  const [foodsData, setFoodsData] = useState([]);
  const [loader, setLoader] = useState(false)
  
  useEffect(() => {
    setLoader(true)
    const url = `https://belly-food-server.onrender.com/foods`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodsData(data);
        setLoader(false)
      });
  }, []);

  return {
    foodsData,
    loader
  };
};

// fetch only registered user order
export const LoadRegisteredUserOrder = () => {

  const [orderInfo, setOrderInfo] = useState([]);
  const [loader, setLoader] = useState(false)
  const {user} = Usefirebase()

  useEffect(() => {
    setLoader(true)
    const url = `https://belly-food-server.onrender.com/orderinformation/${user?.email}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data)
            setOrderInfo(data)
            setLoader(false)
        })
  }, [user?.email])

  return{
    orderInfo,
    loader,
    setOrderInfo
  }

}

// delete single cart from mongoDB
export const handleDltCart = (id, cartsData, setCartsData) => {
  Swal.fire({
    title: "Are You Sure!",
    text: "It will be deleted also your Database history!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = `https://belly-food-server.onrender.com/carts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const withOutDeletedCart = cartsData.filter(
              (carts) => carts._id !== id
            );
            setCartsData(withOutDeletedCart);
            Swal.fire("Deleted!", "Your file cart been deleted.", "success");
          }
        });
    }
  });
};

// delete single order from mongoDB
export const handleDltOrder = (id, orderInfo, setOrderInfo) => {
  Swal.fire({
    title: "Are You Sure!",
    text: "It will be deleted also your Database history!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = `https://belly-food-server.onrender.com/orderinformation/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("deleted order Data", data)
          if (data.deletedCount > 0) {
            const withOutDeletedCart = orderInfo.filter(
              (carts) => carts._id !== id
            );
            setOrderInfo(withOutDeletedCart);
            Swal.fire("Deleted!", "Your file cart been deleted.", "success");
          }
        });
    }
  });
};

// delete an user all cart 
export const handleUserCartDlt = (email) => {
  console.log("email display form commonCode", email)
  const url = `http://localhost:3600/carts/${email}`
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount > 0) {
        console.log("deleted all carts", data)
      }
    });
}

// handle increment button of foodnumber and price
export const handleIncrementBtn = (
  foodDetailsData,
  price,
  setPrice,
  foodNumber,
  setFoodNumber
) => {
  const initialPrice = foodDetailsData.price;
  if (0 <= price && 0 <= foodNumber) {
    price = price + initialPrice;
    setPrice(price);
    foodNumber = foodNumber + 1;
    setFoodNumber(foodNumber);
  }
};

// handle decrement button of foodNumber and price
export const handleDecrementBtn = (
  foodDetailsData,
  price,
  setPrice,
  foodNumber,
  setFoodNumber
) => {
  const initialPriceTwo = foodDetailsData.price;
  if (0 < price && 0 < foodNumber) {
    price = price - initialPriceTwo;
    setPrice(price);
    foodNumber = foodNumber - 1;
    setFoodNumber(foodNumber);
  }
};
