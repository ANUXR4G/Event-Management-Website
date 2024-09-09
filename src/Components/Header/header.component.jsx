import "./header.component.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { siteMap } from "../../Routes/SiteMap";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from 'react-router-dom';
import WHITELOGO from '../../Assets/logo-white.svg'
import BLACKLOGO from '../../Assets/logo-black.svg'
import { useSelector } from "react-redux";
// import { store } from "../../";
// import { setProductPage } from '../../Redux/actions/product.action';


const Header = () => {
  const GetThemeStatus = useSelector(state => state.theme)
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [logo, setLogo] = useState(WHITELOGO)
  const [menuColor, setMenuColor] = useState("#dee0dc")
  const [headerBg, setHeaderBg] = useState("transparent")
  const open = Boolean(anchorEl);
  // const [theme, setTheme] = useState("event-theme")

  useEffect(() => {
    // console.log("theme", theme);
    // var header = document.getElementById("Header");
    if(GetThemeStatus === 0){
      document.body.setAttribute("data-theme", "event-theme")
    }else{
      document.body.setAttribute("data-theme", "wedding-theme")
    }

    console.log("header", document.body.scrollTop);
    if(location.pathname === siteMap.HomePage.path){
      setHeaderBg("transparent")
      setMenuColor("#dee0dc")
      setLogo(WHITELOGO)
      // document.getElementById("header").style.color = "blue";
    }else{
      setHeaderBg("white")
      setMenuColor("black")
      setLogo(BLACKLOGO)
      
    }
    
  }, [GetThemeStatus,location])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeToHome = () => {
    navigate(siteMap.HomePage.path, { replace: false });
    handleClose()
  }

  const routeToTeam = () => {
    navigate(siteMap.TeamPage.path, { replace: true });
    // setTheme("wedding-theme")
  }

  const routeToGallery = () => {
    navigate(siteMap.GalleryPage.path, { replace: true });
    // setTheme("event-theme")
  }

  const routeToContact = () => {
    navigate(siteMap.ContactPage.path, { replace: true });
    // setTheme("event-theme")
  }


  const start = window.performance.now();
  // Your operation
  const totalTimeTaken = window.performance.now() - start;
  console.log(totalTimeTaken);

  return (
    <header id="Header" className="header-main-container" style={{backgroundColor:headerBg}}>

      <div className="header-logo-container" onClick={() => { routeToHome() }}>
        <img className="header-logo" src={logo} alt="" />
        {/* LOGO */}
      </div>
      <div className="header-menu-container">
        <div className="desktop-menu">
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToHome() }}>Home</MenuItem>
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToGallery() }}>Gallery</MenuItem>
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToTeam() }}>Our Team</MenuItem>
          <MenuItem className="header-menu-item" style={{color:menuColor}} onClick={() => { routeToContact() }}>Contact Us</MenuItem>
        </div>
        <div className="header-mobile-menu">
          <div onClick={handleClick}>
            <MenuIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className="header-mobile-menu-item" onClick={() => { routeToHome() }}>Home</MenuItem>
            <MenuItem className="header-mobile-menu-item" onClick={() => { routeToGallery() }}>Gallery</MenuItem>
            <MenuItem className="header-mobile-menu-item" onClick={() => { routeToTeam() }}>Our Team</MenuItem>
            <MenuItem className="header-mobile-menu-item" onClick={() => { routeToContact() }}>Contact Us</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  )
}
export default Header