import { useEffect, useState } from "react";

export const CommonCodeOne = () => {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3600/foods`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFoodsData(data);
      });
  }, []);

  return {
    foodsData,
  };
};
