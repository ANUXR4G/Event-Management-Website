import './WhyUs.css'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { whyUsContent } from '../../../Model/WhyUs.content'
// import { useDispatch } from "react-redux";

const WhyUs = () => {
  // const dispatch = useDispatch()
  const GetThemeStatus = useSelector(state => state.theme)
  const [PageContent, setPageContent] = useState(whyUsContent(GetThemeStatus))

  useEffect(() => {
    setPageContent(whyUsContent(GetThemeStatus))
  }, [GetThemeStatus])

  return (
    <div className="whyus-main-container">
      <div className="whyus-left-container">

        <img className="whyus-image" src={PageContent.images} alt="" />
      </div>
      <div className="whyus-right-container">
        <div className="whyus-subheading">{PageContent.subheading}</div>
        <div className="whyus-heading">{PageContent.heading}</div>
        <div className="whyus-description">{PageContent.description}</div>
      </div>
    </div>
  )
}
export default WhyUs