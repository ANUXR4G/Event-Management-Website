import './GalleryScrollOne.css'
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { galleryScrollContent } from '../../../Model/GalleryScroll.content';

const GalleryScrollOne = () => {
  const GetThemeStatus = useSelector(state => state.theme)
  const scrollEventImagesOne = useSelector(state => state.scrollEventImagesOne)
  const scrollWeddingImagesOne = useSelector(state => state.scrollWeddingImagesOne)
  const [PageContent, setPageContent] = useState(galleryScrollContent(GetThemeStatus, scrollEventImagesOne, scrollWeddingImagesOne))

  useEffect(() => {
    console.log("page-content", PageContent)
    setPageContent(galleryScrollContent(GetThemeStatus, scrollEventImagesOne, scrollWeddingImagesOne))
  }, [GetThemeStatus])

  return (
    <div className="GalleryScrollOne-main-container" >
      <section className="tiles tiles--rotated" id="grid2">
        <div className="tiles__wrap">
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            {Object.keys(PageContent).map((key, value) => {
              if (value >= 0 && value <= 2)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 3 && value <= 8)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 8 && value <= 13)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 13 && value <= 17)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}
            <div className="tiles__line-img"></div>

          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            {Object.keys(PageContent).map((key, value) => {

              if (value >= 18 && value <= 20)
                return <div key={value} className="tiles__line-img" style={{ backgroundImage: `url(${PageContent[key]})` }}></div>
            })}
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
          </div>
        </div>
      </section >
    </div>
  )
}
export default GalleryScrollOne