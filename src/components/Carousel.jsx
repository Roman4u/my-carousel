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

// Selected Framework(s):
// - I chose to design the carousel using React because:
//   1. organization: Laying out the various components, and their functionality, made it easier to conceptualize what I would need to implement so that data could move smoothly amongst them
//   2. managing data: since there would be a lot of data that would need to be passed and updated between/within functions(e.g. depending on which image is being displayed), I felt it would be more efficient to use state management in React. 

// Presentation Logic:
// - my main focus was being able to access and assign a value to the image that is currently being displayed in the carousel. For example, by assigning a value to a variable, such as isActive, it would allow me to implement the basic functionality of a carousel and it would also make it possible to pass data(as state) to another component, such as the component whose functionality it is to add a border to the thumbnail that is currently being displayed. Furthermore, it would also allow me to have functionality that automatically switches images over a set period of time as well as implement the functionality of the buttons. Hence why this was my main focus.