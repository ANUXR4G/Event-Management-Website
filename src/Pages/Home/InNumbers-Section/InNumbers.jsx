import './InNumbers.css'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
// import { ChangeTheme } from '../../../Facade/theme'
// import { useDispatch } from "react-redux";
import NumberCard from '../../../Components/NumberCard/NumberCard'
import { inNumberContent } from '../../../Model/InNumber.content'

const InNumbers = () => {
  // const dispatch = useDispatch()
  const GetThemeStatus = useSelector(state => state.theme)
  const [PageContent, setPageContent] = useState(inNumberContent(GetThemeStatus))

  useEffect(() => {
    setPageContent(inNumberContent(GetThemeStatus))
  }, [GetThemeStatus])

  const NumberContainer = PageContent.map((numbercard) => {
    return <NumberCard icon={numbercard.icon} number={numbercard.number} description={numbercard.description} color_id={numbercard.color_id} />
  })

  return (
    <div className="InNumbers-main-container" >
      {NumberContainer}
    </div>
  )
}
export default InNumbers