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
            // <Prev> button </Prev>
            newIndex = carouselImages.length - 1;
        } else if(newIndex >= carouselImages.length){
            //when it's at the end of the array go to the first index position
            // <Next> button </Next>
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return(
        <>
            <div div className="o-carousel outer">
                   {carouselImages.map(({ image, text }, index) => { 
                       return (
                           <div 
                           className="o-carousel--item inner" 
                           key={index} 
                           style={{display: index === activeIndex ? "block" : "none"}}
                        //    style={{transform: `translateX(-${activeIndex * 100}%)`}}
                           >
                                <img 
                                src={carouselImages[activeIndex].image}
                                style={{
                                    width: 100 + "%", 
                                    height: "auto",
                                    // display: index === activeIndex ? "block" : "none",
                                }}
                                alt={text}
                                />
                            </div>
                        );  
                   })}
            </div>

                <div className="o-carousel--caption row">
                    {/* will display image text */}
                    <div className="o-carousel--caption-text column text">
                        {carouselImages[activeIndex].text}
                    </div>
                
                    {/* will display image number */}
                    <div className="carousel--caption-pagenumber column text">
                        {`${activeIndex + 1} / ${carouselImages.length}`}
                        <Buttons updateIndex={updateIndex} activeIndex={activeIndex} carouselImages={carouselImages} /> 
                    </div>
                   
   
            </div>
        </>
    )
}

export default Carousel;

