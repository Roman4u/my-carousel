import React, { useState } from "react";
import "./carousel.css"
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";



const App = () => {
    const [ activeIndex, setActiveIndex] = useState(0);

    const images = [ 
        {
            image: "https://i.imgur.com/ujZRv5G.jpg",
            text: "Rooms for storage"
        }, 
        {
            image: "https://i.imgur.com/9TgoRWD.jpg",
            text: "Spacious offices with clean design",
        }, 
        {
            image: "https://i.imgur.com/dWH1QiY.jpg",
            text: "An open space for in-house events and seminars.",
        }, 
        {
            image: "https://i.imgur.com/Lp7J7YK.jpg", 
            text: "Casual spaces to relax and wind down"
        }, 
        {
            image: "https://i.imgur.com/3V3WVvH.jpg",
            text: "In house spaces to meet with clients after work"
        },
        {
            image: "https://i.imgur.com/R4HUAOG.jpg",
            text: "Innovative design that offers a variety of amenities",
        },
    ];

    const transitionTime = 3000;
    const header = "A space where designs are created.";
    const firstParagraph = "A space where designs are created with people facing various projects.";
    const secondParagraph = "This space was created based on the concept of viewing the office as a city and designing the experience of that city.";


    return (
        <>
            <div className="carousel-wrapper o-carousel">
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
                                <Carousel 
                                carouselImages={images}
                                transitionTime={transitionTime}
                                activeIndex={activeIndex} 
                                setActiveIndex={setActiveIndex}
                                />
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