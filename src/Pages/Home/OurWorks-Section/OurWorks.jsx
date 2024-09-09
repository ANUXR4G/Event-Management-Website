import './OurWorks.css'
import WorkCard from '../../../Components/OurWorksCard/worksCard'
import { ourWorksContent } from '../../../Model/Works.content'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const OurWorks = () => {

  const GetThemeStatus = useSelector(state => state.theme)
  const [PageContent, setPageContent] = useState(ourWorksContent(GetThemeStatus))

  useEffect(() => {
    setPageContent(ourWorksContent(GetThemeStatus))
  }, [GetThemeStatus])

  const NumberContainer = PageContent.cards.map((workcard)=>{
    return <WorkCard image={workcard.image} title={workcard.cardTitle} description={workcard.description}/>
  })

  return (
    <div className="ourworks-main-container">
      <div className="ourworks-heading-container">
        <div className="ourworks-subheading">{PageContent.subheading}</div>
        <div className="ourworks-heading">{PageContent.heading}</div>
      </div>
      <div className="ourworks-content-container">
        {NumberContainer}
      </div>
    </div>
  )
}
export default OurWorks