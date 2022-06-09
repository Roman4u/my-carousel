import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { act } from "react-dom/test-utils";
import './carousel.css';

const Thumbnails = (props) => {
    const { thumbnails, setActiveIndex, activeIndex } = props;
    
    //if activeIndex === index then that image should display a border

    return (
        <div className="thumbnail-item" > 
            {
                thumbnails.map((image, index) => {
                    const isActive = index === activeIndex ? `active-thumbnail` : '';

                   return(
                     <img
                        onClick={() => {
                        setActiveIndex(index)
                        }}
                        key={index} 
                        src={image.image} 
                        className={`${isActive}`}   
                    />
                   )
                })
            }
        </div>
    )
}

export default Thumbnails;
