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
                    //    const displayText = index === activeIndex ? text : "";
                       return (
                           <>
                           <p className="o-carousel--item inner" 
                           key={index} 
                           style={{transform: `translateX(-${activeIndex * 100}%)`}}
                           >
                                <img 
                                src={image}
                                style={{
                                    width: 100 + "%", 
                                    height: "auto",
                                    display: index === activeIndex ? "block" : "none",
                                }}
                                alt={text}
                                />
                                {/* { displayText } */}
                            </p>
                            </>
                        );  
                   })}
            </div>

             <div className="o-carousel--caption row">
                    {/* will display image text without having to loop*/}
                    {/* <div className="o-carousel--caption-text column text">
                        {carouselImages[activeIndex].text}
                    </div> */}

                {carouselImages.map(({ text }, index) => { 
                    const displayText = index === activeIndex ? text : "";
                    return (
                            <p
                            className="o-carousel--caption-text column" key={index} 
                            style={{
                                display: index === activeIndex ? "block" : "none",
                            }}
                            >
                                { displayText }
                            </p>
    
                    );  
                })}
                

                
                    {/* will display image number */}
                    <div className="carousel--caption-pagenumber column text">
                        {`${activeIndex + 1} / ${carouselImages.length}`}
                        <Buttons updateIndex={updateIndex} activeIndex={activeIndex} /> 
                    </div>
                   
   
            </div>
        </>
    )
}

export default Carousel;

