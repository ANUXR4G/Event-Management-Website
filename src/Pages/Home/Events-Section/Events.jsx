import './Events.css'
import { eventsContent } from '../../../Model/Events.content'
import ContentTemplate1 from '../../../Components/ContentTemplate1/ContentTemplate1'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";


const Events = () => {

  const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(eventsContent(GetThemeStatus))

    useEffect(() => {
        setPageContent(eventsContent(GetThemeStatus))
    }, [GetThemeStatus])

    const eventContainer = PageContent.map((eventcard, index) => {
      if(index % 2 === 0){
        return <ContentTemplate1 image={eventcard.image} title={eventcard.heading} description={eventcard.description} isReverse={false} />
      }else{
        return <ContentTemplate1 image={eventcard.image} title={eventcard.heading} description={eventcard.description} isReverse={true}/>
      }
    })

  return (
    <div className="Events-main-container">
      {eventContainer}
    </div>
  )
}
export default Events