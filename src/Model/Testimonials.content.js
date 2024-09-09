import event from "../Assets/Images/Testimonials/testimonials-event.svg"
import wedding from "../Assets/Images/Testimonials/testimonials-wedding.svg"
import quote from "../Assets/Images/Testimonials/bxs_quote-left.svg"
import team1 from '../Assets/Images/Teams/team1.png'
import team2 from '../Assets/Images/Teams/team2.png'
import team3 from '../Assets/Images/Teams/team3.png'
import rightArrow from "../Assets/Images/Testimonials/event-right.svg"
import leftArrow from "../Assets/Images/Testimonials/event-left.svg"

export const testimonialsContent = (GetThemeStatus) => {
    return {
        mainImage : !GetThemeStatus ? event : wedding,
        heading: "What people say?",
        subheading: "by our heartfelt clients",
        quote:quote,
        leftArrow: leftArrow,
        rightArrow: rightArrow,
        testimonials:[
            {
                id: 1,
                author: "John Doe",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et omnis dignissimos ipsum ratione quisquam non numquam, saepe dolorem enim?",
                image: team1
              },
              {
                id: 2,
                author: "Jane Doe",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et omnis dignissimos ipsum ratione quisquam non numquam, saepe dolorem enim?",
                image: team2
              },
              {
                id: 3,
                author: "Jim Smith",
                message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error et omnis dignissimos ipsum ratione quisquam non numquam, saepe dolorem enim?",
                image: team3
              }
        ]
    }
  }
  