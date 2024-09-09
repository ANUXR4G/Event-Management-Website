import './teamCard.css'



const TeamCard = ({ image, title, description }) => {
    return (
        <div className="teamcard-main-container">
            <img className="team-image-container" src={image} alt="" />
            <div className='team-heading-container'>{title}</div>
            <div className='team-description-container'>{description}</div>
        </div>
    )
}
export default TeamCard