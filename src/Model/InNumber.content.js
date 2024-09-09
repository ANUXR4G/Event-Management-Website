import event1 from "../Assets/Images/Numbers/events/event-icon-1.svg"
import event2 from "../Assets/Images/Numbers/events/event-icon-2.svg"
import event3 from "../Assets/Images/Numbers/events/event-icon-3.svg"
import event4 from "../Assets/Images/Numbers/events/event-icon-4.svg"
import wedding1 from "../Assets/Images/Numbers/wedding/wedding-icon-1.svg"
import wedding2 from "../Assets/Images/Numbers/wedding/wedding-icon-2.svg"
import wedding3 from "../Assets/Images/Numbers/wedding/wedding-icon-3.svg"
import wedding4 from "../Assets/Images/Numbers/wedding/wedding-icon-4.svg"



export const inNumberContent = (GetThemeStatus) => {
    return [
        {
            icon: !GetThemeStatus ? event1 : wedding1,
            number:"100+",
            description:"Happy Clients from different countries.",
            color_id:1
        },
        {
            icon: !GetThemeStatus ? event2 : wedding2,
            number:"100+",
            description:"Memorable Events conducted.",
            color_id:2
        },
        {
            icon: !GetThemeStatus ? event3 : wedding3,
            number:"100+",
            description:"Team members ready for action.",
            color_id:3
        },
        {
            icon: !GetThemeStatus ? event4 : wedding4,
            number:"100+",
            description:"Companies offer undeniable support.",
            color_id:4
        }
    ]
  }
  