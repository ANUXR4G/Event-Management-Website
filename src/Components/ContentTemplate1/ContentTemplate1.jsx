import './ContentTemplate1.css'
// import productImage from '../../Assets/about-banner.png'
import React, { useState, useEffect } from 'react';


const ContentTemplate1 = ({ title, description, image, isReverse }) => {
    const [flexDirection, setflexDirection] = useState("row");
    const [gap, setGap] = useState("0vh")


    useEffect(() => {
        if (isReverse === true) {
            setflexDirection("row-reverse")
        }
        if(window.screen.width <= 720){
            setflexDirection("column")
            setGap("3vh")
        }
    }, [isReverse])

    
    return (
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "5vh",
            flexDirection: flexDirection,
            gap:gap
        }}>
            {/* {isReverse === true ? document.getElementsByClassName("ContentTemplate1-main-container").style.flexDirection = "row-reverse" : ""} */}
            <div className="ContentTemplate1-left">
                <div className="content-container">
                    <div className="title">
                        {title}
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
            <div className="ContentTemplate1-right">
                <div className="content2-container">
                    <img className="content-image" src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
export default ContentTemplate1