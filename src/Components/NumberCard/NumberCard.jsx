import './NumberCard.css'



const NumberCard = ({icon,number,description,color_id}) => {
    return (
        <div className="Numbercard-main-container" style={{
            backgroundColor: `var(--color-${color_id})`
        }}>
            <div className='icon-container'>
                <img src={icon} alt="" />
            </div>
            <div className='count-container'>{number}</div>
            <div className='number-description-container'>{description}</div>
        </div>
    )
}
export default NumberCard