import './worksCard.css'



const WorkCard = ({ image, title, description }) => {
    return (
        <div className="workCard-main-container">
            <img className="work-image-container" src={image} alt="" />
            <div className='work-heading-container'>{title}</div>
            <div className='work-description-container'>{description}</div>
        </div>
    )
}
export default WorkCard