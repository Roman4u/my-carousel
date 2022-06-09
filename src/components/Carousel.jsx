import React, { useEffect } from "react";
import "./carousel.css"


const Carousel = (props) => {
    const { carouselImages, transitionTime, activeIndex,setActiveIndex } = props;

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
    };

    return(
        <>
            <div className="o-carousel">
                <div className="o-carousel--item inner" style={{transform: `translateX(-${activeIndex * 100}%)`}} >
                   {carouselImages.map(({image, text}, index) => {
                       const test = !activeIndex ? `` : `o-carousel--item`;

                       return (
                             <img 
                             src={image}
                             key={index} 
                             style={{width: "100%", height: "100%"}}
                             alt={text}
                             className={test}
                             />
                        );  
                   })}
                </div>
                <div className="o-carousel--caption row">
                {/* will display text */}
                    <div className="o-carousel--caption--text column">
                        {carouselImages[activeIndex].text}
                    </div>

                    <div className="carousel--caption--pagenumber column">
                        {`${activeIndex + 1} / ${carouselImages.length}`}
                    </div>
                </div>
                    
                    <div className="indicators">
                        <button className="o-carousel--prev" onClick={() => {
                            updateIndex(activeIndex - 1);
                        }} >
                            Prev
                        </button>
                        <button className="o-carousel--next" onClick={() => {
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