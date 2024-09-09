import './Team.css'
import Trail from "./Trail-Section/Trail";
import TeamCard from '../../Components/TeamsCard/teamCard';
import { teamContent } from '../../Model/Team.content';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Team = () => {

    const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(teamContent(GetThemeStatus))

    useEffect(() => {
        // window.scrollTo(0,0)
        // document.body.scrollTop = 0
        setPageContent(teamContent(GetThemeStatus))
    }, [GetThemeStatus])

    const TeamContainer = PageContent.team.map((teamcard) => {
        return <TeamCard image={teamcard.image} title={teamcard.name} description={teamcard.content} />
    })

    return (
        <div className="team-page-main-container">
            <Trail></Trail>
            <div className='team-page-member-container'>
                {TeamContainer}
            </div>
            
        </div>
    )
}
export default Team