import React, { useState, useEffect } from "react";
import "./carousel.css"


const Carousel = (props) => {
    const { carouselImages, transitionTime, activeIndex,setActiveIndex } = props;

    // const [imageText, setImageText] = useState("");

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

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = carouselImages.length - 1;
        } else if(newIndex >= carouselImages.length){
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return(
        <>
            <div className="carousel">
                <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}} >
                   {carouselImages.map(({image, text}, index) => {
                       return (
                             <img 
                             src={image}
                             key={index} 
                             style={{width: "100%", height: "100%"}}
                             alt={`${text}`}
                             />
                        );  
                   })}
                </div>
                <div className="o-carousel--caption--text">
                    {carouselImages[activeIndex].text}
                </div>
                
                <div className="indicators">
                    <button onClick={() => {
                        updateIndex(activeIndex - 1);
                    }} >
                        Prev
                    </button>
                    <button onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel;