import React from 'react';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  return (
    <div>
      <div className="py-5 px-2 flex flex-col items-center">
        <h1 className="title uppercase text-4xl m-5 font-bold">
          The best pizza in town
        </h1>
        <p className="desc text-2xl text-[#444] w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="wrapper grid lg:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-2">
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
