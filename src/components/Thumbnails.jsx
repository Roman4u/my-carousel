import React from "react";
import './carousel.css';

const Thumbnails = (props) => {
    const { thumbnails, setActiveIndex, activeIndex } = props;

    return (
        <div className="o-carousel--thumbnail" > 
            {
                thumbnails.map(({ image, text }, index) => {
                    const isActive = index === activeIndex ? `active-thumbnail` : '';

                   return(
                     <img
                        onClick={() => {
                        setActiveIndex(index)
                        }}
                        key={index} 
                        src={image}
                        alt={text} 
                        className={isActive}   
                    />
                   )
                })
            }
        </div>
    )
}

export default Thumbnails;
