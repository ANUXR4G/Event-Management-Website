import Cultural from "../Assets/Images/Events/wedding/CulturalTradition.png"
import Decorations from "../Assets/Images/Events/wedding/Decorations.png"
import Food from "../Assets/Images/Events/wedding/Food.png"
import event from "../Assets/Images/Events/event/events-1.png"

export const eventsContent = (GetThemeStatus) => {
    return !GetThemeStatus ?
        [
            {
                image: event,
                heading: "Festivals",
                description: "We handle the process of planning, organizing, and executing festivals or events. From setting a budget, choosing a venue, coordinating with vendors and sponsors, marketing and promoting the event, managing volunteers, and ensuring that the event runs smoothly and safely."
            },
            {
                image: event,
                heading: "Shows",
                description: "We coordinate between multiple teams, including producers, directors, lighting and sound technicians, stage managers, and talent managers, to bring a show to life.  We are responsible for overseeing the entire process, from conceptualization to execution, and ensuring that the event runs smoothly and meets the standards required for broadcast."
            },
            {
                image: event,
                heading: "Lifestyle",
                description: "We handleevents such as food and wine festivals, fashion shows, cultural festivals, and music concerts. The goal of these events is to create a memorable and engaging experience for the attendees by bringing together elements of lifestyle, culture, and entertainment."
            }
        ] : [
            {
                image: Cultural,
                heading: "Cultural Traditions",
                description: "we specialize in cultural and traditional weddings that helps couples plan and execute weddings that are steeped in cultural and traditional customs and practices. We maintain the expression of the couple's heritage, identity, and beliefs and typically involve unique rituals, customs, dress codes, and food traditions that are specific to the couple's culture and religion."
            },
            {
                image: Decorations,
                heading: "Decorations",
                description: "we offer a wide range of decoration options, including flower arrangements, lighting, backdrops, linens, and table settings, and may also provide additional services such as setup and cleanup. Our team of experienced designers and decorators who work together to create the perfect ambiance for the wedding, and may be equipped to handle weddings of different sizes and styles, including outdoor and indoor weddings."
            },
            {
                image: Food,
                heading: "Food",
                description: "we offer a range of food services for weddings, including catering, bar services, and other related food-related services. we understand their food preferences, dietary restrictions, and cultural and traditional requirements and provide a customized menu that reflects these requirements. we also provide additional services such as setup, service, and cleanup, and have a team of professional chefs and servers who ensure that the food is of high quality and is served in a timely and efficient manner."
            }
        ]
}