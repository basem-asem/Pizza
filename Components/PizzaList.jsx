import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList: initialPizzaList }) => {
  const [loading, setLoading] = useState(true);
  const [pizzaList, setPizzaList] = useState(initialPizzaList); // Initialize pizzaList state with the initial prop value
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3; // Maximum number of retry attempts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://alex-pizza.vercel.app/api/products");
        setPizzaList(res.data); // Update pizzaList state with the fetched data
        setLoading(false); // Set loading to false when the data is loaded
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false); // Set loading to false even on error
        if (retryCount < maxRetries) {
          // Retry fetching the data with an incremental delay (e.g., 2 seconds)
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, 2000);
        }
      }
    };

    fetchData();
  }, [retryCount]); // Retry whenever retryCount changes

  return (
    <div>
      <div className="py-5 px-2 flex flex-col items-center">
        <h1 className="title uppercase text-4xl m-5 font-bold">The best pizza in town</h1>
        <p className="desc text-2xl text-[#444] w-3/4">
          At our Lama pizza shop, we serve the most delicious and mouth-watering pizzas in town. From classic Margherita to exotic toppings, our wide range of pizzas caters to all taste buds. Come and experience the best pizza flavors in a cozy and friendly environment.

          Our pizza chefs handcraft each pizza with love and the finest ingredients. We take pride in delivering exceptional customer service and ensuring that every pizza leaves you with a delightful experience.

          Explore our selection of pizzas below and indulge in a pizza feast like never before!
        </p>
        <div className="wrapper grid lg:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2">
          {loading ? (
            <p>Loading...</p>
          ) : pizzaList.length === 0 ? (
            <p>No pizzas available.</p>
          ) : (
            pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
