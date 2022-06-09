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

    // updates the value of activeIndex when a button is pushed
    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = carouselImages.length - 1;
        } else if(newIndex >= carouselImages.length){
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return(
        <>
            <div className="o-carousel">
                <div className="o-carousel--item inner" style={{transform: `translateX(-${activeIndex * 100}%)`}} >
                   {carouselImages.map(({image, text}, index) => { 
                        // const test = activeIndex ? "" : "hidden";
                       return (
                             <img 
                             src={image}
                             key={index} 
                             style={{width: "100%", height: "100%"}}
                             alt={text}
                            //  className={test}
                             />
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
                    
                    {/* <div className="indicators">
                        <button className="o-carousel--prev text" onClick={() => {
                            updateIndex(activeIndex - 1);
                        }} >
                            Prev
                        </button>
                        <button className="o-carousel--next text" onClick={() => {
                            updateIndex(activeIndex + 1)
                        }}>
                            Next
                        </button>
                    </div> */}
            </div>
        </>
    )
}

export default Carousel;