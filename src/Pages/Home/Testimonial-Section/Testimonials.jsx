import './Testimonials.css'
import Testimonial from '../../../Components/Testimonial/testimonial'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { testimonialsContent } from '../../../Model/Testimonials.content';

const Testimonials = () => {

  const GetThemeStatus = useSelector(state => state.theme)
  const [PageContent, setPageContent] = useState(testimonialsContent(GetThemeStatus))

  useEffect(() => {
    setPageContent(testimonialsContent(GetThemeStatus))
  }, [GetThemeStatus])

  return (
    <div className='testimonials-main-container'>
      <div className="testimonials-left-container">
          <img className="testimonials-image" src={PageContent.mainImage} alt="" />
      </div>
      <div className="testimonials-right-container">
        <div className="testimonials-subheading-container">
          {PageContent.subheading}
        </div>
        <div className="testimonials-heading-container">
          {PageContent.heading}
        </div>
        <img src={PageContent.quote} alt="" className="testimonials-quote-img" />
          <Testimonial/>
      </div>
    </div>
  )
}
export default Testimonials