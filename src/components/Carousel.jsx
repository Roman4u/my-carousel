import React, { useEffect } from "react";
import Buttons from "./Buttons";
import "./carousel.css"


const Carousel = (props) => {
    const { carouselImages, transitionTime, activeIndex, setActiveIndex } = props;

    // automatically switches images upon loading
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, transitionTime);

        return () => {
            if(interval){
                clearInterval(interval);
            }
        };
    });

    // updates the value of activeIndex upon a button press
    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            //when it's at the start of the array go to the last index position
            newIndex = carouselImages.length - 1;
        } else if(newIndex >= carouselImages.length){
            //when it's at the end of the array go to the first index position
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return(
        <>
            <div className="o-carousel">
                <div className="o-carousel--thumbnail inner" style={{transform: `translateX(-${activeIndex * 100}%)`}} >
                   {carouselImages.map(({ image, text }, index) => { 
                       return (
                           <>
                             <img 
                             src={image}
                             key={index} 
                             style={{
                                width: "100%", 
                                height: "100%", 
                                // display: index === activeIndex ? 'block' : 'none',
                            }}
                             alt={text}
                             />
                            </>
                        );  
                   })}
                </div>

                <div className="o-carousel--caption row">
                {/* will display text */}
                    <div className="o-carousel--caption--text column text">
                        {carouselImages[activeIndex].text}
                    </div>

                    <div className="carousel--caption--pagenumber column text">
                        {`${activeIndex + 1} / ${carouselImages.length}`}
                    </div>
                </div>

                <Buttons updateIndex={updateIndex} activeIndex={activeIndex} />     
            </div>
        </>
    )
}

export default Carousel;
