import React from 'react';
import Image from 'next/image';

const PizzaCard = () => {
    return (
        <div className='container p-2 flex flex-col items-center justify-center py-5 px-10 cursor-pointer'>
            <Image src="/img/pizza.png" alt="" width="500" height="500"/>
            <h1 className="title uppercase text-lg text-red-500 font-bold text-center">Fiori di zucca</h1>
            <span className="price  text-lg text-[#666] font-bold">$19.90</span>
            <p className="desc text-center text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    );
};

export default PizzaCard;