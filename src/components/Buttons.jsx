import React from "react";
import "./carousel.css";

const Buttons = (props) => {
    const { updateIndex, activeIndex, carouselImages } = props;

    const prevSlide = () => {
        updateIndex(activeIndex === 0 ? carouselImages.length - 1 : activeIndex - 1);
    };

    const nextSlide = () => {
        updateIndex(activeIndex === carouselImages.length - 1 ? 0 : activeIndex + 1)
    };


    return (
        <div className="indicators">
            <button className="o-carousel--prev text" onClick={prevSlide} >
                Prev
             </button>
            <button className="o-carousel--next text" onClick={nextSlide}>
                 Next
            </button>
        </div>
    )

}

export default Buttons; 