import { useEffect, useState } from 'react';

const CommonCode = () => {
    const [foodsData, setFoodsData] = useState([]);
    useEffect(() => {
        const url = `http://localhost:3600/foods`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setFoodsData(data);
            })
    }, [])

    return {
        foodsData
    };
};

export default CommonCode;