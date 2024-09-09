import './App.css';
import React, { useEffect, useState } from 'react';
import PageRoutes from "./Routes/Routes";
import Header from './Components/Header/header.component';
import Footer from './Components/Footer/footer.component';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { importAll, loadImage, preloadFonts } from './utils';
// import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setLandingImages, setScrollEventImagesOne, setScrollEventImagesTwo, setScrollWeddingImagesOne, setScrollWeddingImagesTwo } from './Redux/actions/images.action';
import LocomotiveScroll from 'locomotive-scroll';
// import { siteMap } from './Routes/SiteMap';
// import { useLocation } from "react-router-dom";
// import { GetSEOData } from './Services/networkCall';
// import ScrollToTop from './Routes/ScrollToTop';

function App() {
  // const location = useLocation();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const [ismobile, setIsmobile] = useState(false)
  // const location = useLocation();

  // useLayoutEffect(() => {
  //   if (window.screen.width <= 760 && location.pathname === "/") {
  //     setIsmobile(true)
  //     console.log("location",location.pathname)
  //     console.log("width", windowSize.current[0])
  //   }else{
  //     setIsmobile(false)
  //   }

  //  }, [location, windowSize])

  //  useEffect(()=>{
  //   console.log("from App.js file");
  //   GetSEOData()
  //  },[])

  //  useLayoutEffect(() => {
  //   console.log("width", windowSize.current[0])
  //  }, [])

  const landing = importAll(
    require.context("./Assets/Images/Landing", false, /\.(png|jpe?g|svg)$/)
  );
  const scrollEventOne = importAll(
    require.context("./Assets/Images/ScrollGalleryOne/Event", false, /\.(png|jpe?g|svg)$/)
  );

  const scrollEventTwo = importAll(
    require.context("./Assets/Images/ScrollGalleryTwo/Event", false, /\.(png|jpe?g|svg)$/)
  );
  const scrollWeddingOne = importAll(
    require.context("./Assets/Images/ScrollGalleryOne/Wedding", false, /\.(png|jpe?g|svg)$/)
  );

  const scrollWeddingTwo = importAll(
    require.context("./Assets/Images/ScrollGalleryTwo/Wedding", false, /\.(png|jpe?g|svg)$/)
  );



  useEffect(() => {
    // window.scrollTo(0,0)

    (async () => {
      Promise.all([
        preloadFonts(),
        Object.keys(landing).map((key, value) => loadImage(landing[key])),
        Object.keys(scrollEventOne).map((key, value) => loadImage(scrollEventOne[key])),
        Object.keys(scrollEventTwo).map((key, value) => loadImage(scrollEventTwo[key])),
        Object.keys(scrollWeddingOne).map((key, value) => loadImage(scrollWeddingOne[key])),
        Object.keys(scrollWeddingTwo).map((key, value) => loadImage(scrollWeddingTwo[key])),
      ])
        .then(() => {

          // throw ("a");
          dispatch(setLandingImages(landing));
          dispatch(setScrollEventImagesOne(scrollEventOne));
          dispatch(setScrollEventImagesTwo(scrollEventTwo));
          dispatch(setScrollWeddingImagesOne(scrollWeddingOne));
          dispatch(setScrollWeddingImagesTwo(scrollWeddingTwo));
          const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            inertia: 0.8,
            smooth: true,
            getDirection: true,
            smoothMobile: false,
          });
          new ResizeObserver(() => scroll.update()).observe(
            document.querySelector("[data-scroll-container]")
          );
          setMounted(true);

        })
        .catch(err => { console.log("Failed to load images", err); setError(true) })
    })();




    // menu(resultJson, category)
  }, [dispatch, landing, scrollEventOne, scrollEventTwo, scrollWeddingOne, scrollWeddingTwo])

  // useEffect(()=>{
  //   if(location.pathname === siteMap.GalleryPage.path || location.pathname === siteMap.TeamPage.path){
  //     console.log("scrollpos");
  //     window.scrollTo(0,0)
  //     console.log("path", location.pathname);
  //   }else{
  //     window.scrollTo(0,0)
  //   }
  // },[location])


  return (
    <div data-scroll-container id="scroll-container">{error ?
      <div className='app-main-container' >
        Some problem
      </div >
      :
      mounted ?
        <div className='app-main-container' >
           {/* <ScrollToTop/> */}

          <Header />
          <PageRoutes />
          <Footer />
           {/* </ScrollToTop> */}
        </div>
        :
        <div className='app-main-container'>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          Please Wait, Site is getting ready
        </div>}
    </div>
  );
}

export default App;
