import events from "../Assets/Images/WhyUs/switch-board-why-event.png"
import wedding from "../Assets/Images/WhyUs/switch-board-whyus-wedding.png"

export const whyUsContent = (GetThemeStatus) => {
    return {
        images: !GetThemeStatus ? events : wedding,
        subheading: "Make Things Happen",
        heading: "But Why Us?",
        description: "We understand that every event is unique and therefore offer customized solutions to meet the specific needs and requirements of each client. We work closely with clients to understand your vision and goals, ensuring that every event is tailored to your individual needs.We offer a wide range of services, including event planning, venue selection, catering, entertainment, decorations, and much more."
    }
}
