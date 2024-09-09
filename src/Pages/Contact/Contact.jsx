import "./Contact.css"
import { contactContent } from "../../Model/Contact.content"
// import { useEffect } from "react"

const Contact = () => {
    return (
        <div className="contact-page-main-container">
            <div className="contact-page-map-container">
                <div className="contact-page-map-title">
                    {contactContent().mapTitle} 
                </div>
                <div className="contact-page-map-description">
                    {contactContent().mapDescription} 
                </div>
                <div className="contact-page-map-image">
                    <img className="map-image" src={contactContent().mapImage} alt="" />
                </div>
            </div>
            <div className="contact-page-contact-container">
                <div className="office-container">
                    <div className="contact-title">Office Address</div>
                    <div className="contact-content">{contactContent().officeAddress}</div>
                </div>
                <div className="office-container">
                    <div className="contact-title">Contact</div>
                    <div className="contact-content">{contactContent().contact}</div>
                </div>
                <div className="office-container">
                    <div className="contact-title">Email</div>
                    <div className="contact-content">{contactContent().email}</div>
                </div>
            </div>
        </div>
    )
}
export default Contact