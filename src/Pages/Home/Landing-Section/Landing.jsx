import './Landing.css'
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { landingPageContent } from '../../../Model/Landing.content'
// import { ChangeTheme } from '../../../Facade/theme'
import { useDispatch } from "react-redux";
import { setTheme } from "../../../Redux/actions/theme.action";
import logo from "../../../Assets/logo-white.svg"
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: "#fe2185"
                },
                colorPrimary: {
                    "&.Mui-checked": {
                        color: "#a60321"
                    }
                },
                track: {
                    opacity: 0.2,
                    backgroundColor: "#fe2185",
                    ".Mui-checked.Mui-checked + &": {
                        opacity: 0.7,
                        backgroundColor: "#a60321"
                    }
                }
            }
        }
    }
});

const Landing = () => {

    const dispatch = useDispatch()
    const landingImages = useSelector(state => state.landingImages)
    const GetThemeStatus = useSelector(state => state.theme)
    const [PageContent, setPageContent] = useState(landingPageContent(GetThemeStatus, landingImages))
    // const [theme, setTheme] = useState("event-theme")

    useEffect(() => {
        setPageContent(landingPageContent(GetThemeStatus, landingImages))
    }, [GetThemeStatus])

    const changeTheme = (themeFlag) => {
        dispatch(setTheme(themeFlag))
        if (themeFlag === 0) {
            document.body.setAttribute("data-theme", "event-theme")
        } else {
            document.body.setAttribute("data-theme", "wedding-theme")
        }
    }


    return (
        <div className="landing-main-container" style={{
            backgroundImage: `url(${PageContent.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="landing-left-container">
                <div className='title-container'>{PageContent.heading}
                    <span className='event-name-color'>
                        {PageContent.companyName}
                    </span>
                </div>
                {/* <div className="landing-image-container">
                    <img src={logo} alt="" />
                </div> */}
                <div className='description-container'>{PageContent.content}</div>

                <div className='button-container'>
                    <button className={GetThemeStatus ? "button_inactive" : "button_active"} onClick={() => changeTheme(0)}>
                        Events
                    </button>
                    <div style={{ scale: "150%" }}>
                        <ThemeProvider theme={theme}>
                            <Switch
                                checked={GetThemeStatus ? true : false}
                                onChange={() => GetThemeStatus ? changeTheme(0) : changeTheme(1)}
                            // name="checkedA"
                            />
                        </ThemeProvider>
                    </div>
                    <button className={GetThemeStatus ? "button_active" : "button_inactive"} onClick={() => changeTheme(1)}>
                        Wedding
                    </button>
                </div>

            </div>
            <div className="landing-right-container">

            </div>
        </div>
    )
}
export default Landing