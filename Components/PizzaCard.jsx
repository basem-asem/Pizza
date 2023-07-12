import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = ({pizza}) => {
    return (
        <div className='container p-2 flex flex-col items-center justify-center py-5 px-10 cursor-pointer'>
            <Link href={`/product/${pizza._id}`}>
            <Image src={pizza.img} alt="" width="500" height="500"/>
            </Link>
            <h1 className="title uppercase text-lg text-red-500 font-bold text-center">{pizza.title}</h1>
            <span className="price  text-lg text-[#666] font-bold">${pizza.prices[0]}</span>
            <p className="desc text-center text-[#777]">
                {pizza.desc}
            </p>
        </div>
    );
};

export default PizzaCard;