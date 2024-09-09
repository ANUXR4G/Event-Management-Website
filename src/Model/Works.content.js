import work1 from "../Assets/Images/Works/work-image-1.png"
import work2 from "../Assets/Images/Works/work-image-2.png"
import work3 from "../Assets/Images/Works/work-image-3.png"


export const ourWorksContent = () => {
    return {
        heading: "Our Works",
        subheading: "Your events are our memories",
        cards: [
            {
                image: work1,
                cardTitle: "Lorem ipsum dolor",
                description: "Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing egestas lorem."
            },
            {
                image: work2,
                cardTitle: "Lorem ipsum dolor",
                description: "Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing egestas lorem."
            },
            {
                image: work3,
                cardTitle: "Lorem ipsum dolor",
                description: "Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing egestas lorem."
            }
        ]
    }
}
