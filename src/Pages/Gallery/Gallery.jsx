import "./Gallery.css"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';

import { useSelector } from "react-redux";


const Gallery = () => {
    const [ismobile, setIsmobile] = useState(false)
    // const scrollto = () => (window.scrollTo(0,0))

    useEffect(() => {
        // window.scrollTo(0,0)
        // scrollto()
        if (window.screen.width <= 760) {
            setIsmobile(true)
        }
    }, [])

    var data = [
        'bank',
        'black',
        'bland',
        'blanks',
        'blink',
        'blunk',
        'brank',
        'clank',
        'flank',
        'lank',
        'plank',
        'slank',
        'bank',
        'black',
        'bland',
        'blanks',
        'blink',
        'blunk',
        'brank',
        'clank',
        'flank',
        'lank',
        'plank',
        'slank',
    ];
    const scrollEventImagesOne = useSelector(state => state.scrollWeddingImagesOne)

    return (
        <div className="gallery-main-container">
            <div className="gallery-section-1-container">
                <div className="gallery-section-1-left-subheading">your projects with love!</div>
                <div className="gallery-section-1-left">
                    Our Works
                </div>
                <div className="gallery-section-1-left-description">We handle all types of events for all types of people, culture, communities, or interests.</div>
            </div>
            <div className="gallery-section-2-container">
                <Box sx={{ width: 1, height: '100%', overflowY: 'scroll', overflow: 'hidden' }}>
                    <ImageList variant="masonry" cols={!ismobile ? 3 : 1} gap={8}>
                        {Object.keys(scrollEventImagesOne).map((key, value) => (
                            <ImageListItem key={value}>
                                <img
                                    src={`${scrollEventImagesOne[key]}?w=248&fit=crop&auto=format`}
                                    // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={data[value]}
                                    loading="lazy"
                                    className="gallery-image"
                                />
                                {/* <ProductZoom productImage={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}/> */}
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </div>
    )
}
export default Gallery