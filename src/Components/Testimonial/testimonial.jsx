import "./testimonial.css"
import React, { useState } from "react";
import { testimonialsContent } from "../../Model/Testimonials.content";


const Testimonial = () => {
    const [testimonials] = useState(testimonialsContent().testimonials)
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((index + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex(index === 0 ? testimonials.length - 1 : index - 1);
    };

    return (
        <div className="testimonials-card-container">
            <div className="testimonials-content">
                "{testimonials[index].message}"
            </div>
            <div className="testimonials-author-container">
            <img className="testimonial-review-image" src={testimonials[index].image} alt="" />
            <div className="testimonials-author">{testimonials[index].author}</div>
            </div>
            <div className="testimonials-button-container">
            <img className="testimonials-arrow" src={testimonialsContent().leftArrow} alt="" onClick={handlePrev}/>
            <img className="testimonials-arrow" src={testimonialsContent().rightArrow} alt="" onClick={handleNext} />
            </div>
        </div>
    )
}
export default Testimonial