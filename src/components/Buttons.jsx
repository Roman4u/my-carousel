import React from "react";
import "./carousel.css";

const Buttons = (props) => {
    const { updateIndex, activeIndex } = props;

    return (
        <div className="indicators">
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
        </div>
    )
}

export default Buttons; 