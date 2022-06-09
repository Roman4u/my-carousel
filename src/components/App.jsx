import React, { useState } from "react";
import "./carousel.css"
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";



const App = () => {
    const [ activeIndex, setActiveIndex] = useState(0);

    const images = [{
            image: "https://i.imgur.com/R4HUAOG.jpg",
            text: "First slide text",
        }, 
        {
            image: "https://i.imgur.com/9TgoRWD.jpg",
            text: "Second slide text",
        }, 
        {
            image: "https://i.imgur.com/ujZRv5G.jpg",
            text: "Third slide text"
        }, 
        {
            image: "https://i.imgur.com/dWH1QiY.jpg",
            text: "Fourth slide text",
        }, 
        {
            image: "https://i.imgur.com/Lp7J7YK.jpg", 
            text: "Fifth slide text"
        }, 
        {
            image: "https://i.imgur.com/3V3WVvH.jpg",
            text: "Sixth slide text"
        },
    ];

    const transitionTime = 3000;
    const header = "A space where designs are created.";
    const firstParagraph = "A space where designs are created with people facing various projects.";
    const secondParagraph = "This space was created based on the concept of viewing the office as a city and designing the experience of that city.";


    return (
        <>
            <div className="carousel-wrapper">
                <div className="row">
                    <div className="column">
                        <div className="text-column">
                            <h2 className="text">
                                {header}
                            </h2>
                            <p className="text">
                                {firstParagraph}
                            </p>
                            <p className="text">
                                {secondParagraph}
                            </p>
                        </div>
                    </div>

                    <div className="column">
                        <div className="carousel-column">
                            <div className="carousel">
                                <Carousel 
                                carouselImages={images}
                                transitionTime={transitionTime}
                                activeIndex={activeIndex} 
                                setActiveIndex={setActiveIndex}
                                />
                            </div>
                        </div>   
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="thumbnail-column">
                            <Thumbnails 
                            thumbnails={images} 
                            setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;