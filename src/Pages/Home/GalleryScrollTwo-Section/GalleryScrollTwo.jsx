import './GalleryScrollTwo.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { galleryScrollContent } from '../../../Model/GalleryScroll.content';

const GalleryScrollTwo = () => {
  const GetThemeStatus = useSelector(state => state.theme)
  const scrollEventImagesTwo = useSelector(state => state.scrollEventImagesTwo)
  const scrollWeddingImagesTwo = useSelector(state => state.scrollWeddingImagesTwo)
  const [PageContent, setPageContent] = useState(galleryScrollContent(GetThemeStatus, scrollEventImagesTwo, scrollWeddingImagesTwo))

  useEffect(() => {
    setPageContent(galleryScrollContent(GetThemeStatus, scrollEventImagesTwo, scrollWeddingImagesTwo))
  }, [GetThemeStatus])

  return (
    <div className="GalleryScrollTwo-main-container">
      <section className="tiles tiles--columns" id="grid3">
        <div className="tiles__wrap">
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 0 && value <= 2)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 3 && value <= 5)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 6 && value <= 8)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 9 && value <= 11)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
        </div>
      </section>
    </div>
  )
}
export default GalleryScrollTwo