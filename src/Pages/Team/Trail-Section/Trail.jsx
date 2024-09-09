import './Trail.css'
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { ImageTrailComp } from '../../../utils';

const Trail = () => {
    const scrollEventImagesTwo = useSelector(state => state.scrollEventImagesTwo)

    useEffect(() => {
        ImageTrailComp();
    }, [])


    return (
        <div className='trail-main-container'>
            <div className="trail">
                {Object.keys(scrollEventImagesTwo).map((key, value) => {
                    if (value >= 0 && value <= 14)
                        return <img className="trail__img" src={scrollEventImagesTwo[key]} alt={value} key={value} />
                })}
                <h3 className="trail__title">Team</h3>
            </div>
        </div>
    );
}

export default Trail;