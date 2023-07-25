import Image from 'next/image';
import React, { useState } from 'react';

const Featured = () => {
    const images = [
        "/img/featured1.jpg",
        "/img/featured2.jpg",
        "/img/featured5.jpg",
    ];
    const [slider, setSlider] = useState(0)
    const handleSlider = (direction) => {
        if(direction==="l"){
            setSlider(slider !== 0 ? slider-1 : 2)
        }        
        if(direction==="r"){
            setSlider(slider !== 2 ? slider+1 : 0)
        }
    }
    return (
        <div className='slider bg-red-500 md:h-[calc(100vh-100px)] overflow-hidden h-[50vh] relative'>
            <div className={`wrapper w-[300vw] h-full flex transition-all duration-1000 `} style={{transform: `translateX(${-100 * slider}vw)`}}>
                {images.map((image, i) => (
                <div className="imagecontainer w-[100vw] h-full relative" key={i} >
                    <Image src={image} alt="" layout='fill' />
                </div>
                ))}
            </div>
            <div className="right absolute top-0 bottom-0 m-auto right-0 w-24 h-24 cursor-pointer" onClick={()=>handleSlider("r")}>
            <Image src="/img/arrowr.png" alt="" className='' layout='fill'/>        
            </div>
            <div className="left absolute top-0 bottom-0 m-auto left-0 w-24 h-24 cursor-pointer" onClick={()=>handleSlider("l")}>
            <Image src="/img/arrowl.png" alt=""  className='' layout='fill'/>
            </div>
        </div>
    );
};

export default Featured;