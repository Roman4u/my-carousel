
import React from "react";
import './carousel.css';

const Thumbnails = (props) => {
    const { thumbnails, setActiveIndex, activeIndex } = props;

    return (
        <div className="thumbnails" > 
            {
                thumbnails.map(({ image, text }, index) => {
                    const isActive = index === activeIndex ? `active-thumbnail` : '';

                   return(
                    <div className="o-carousel--thumbnail" key={index} onClick={() => {
                        setActiveIndex(index)
                        }}> 
                        <img
                            // onClick={() => {
                            // setActiveIndex(index)
                            // }}
                            key={index} 
                            src={image}
                            alt={text} 
                            className={isActive}   
                        />
                    </div>
                   )
                })
            }
        </div>
    )
}

export default Thumbnails;
