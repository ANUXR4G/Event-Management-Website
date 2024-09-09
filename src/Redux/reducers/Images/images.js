
import { SET_LANDING_IMAGES, SET_SCROLL_EVENT_IMAGES_ONE, SET_SCROLL_EVENT_IMAGES_TWO, SET_SCROLL_WEDDING_IMAGES_ONE, SET_SCROLL_WEDDING_IMAGES_TWO } from "../../actions/images.action"

const initialState = {};

export const landingImages = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANDING_IMAGES:
            return action.payload
        default:
            return state
    }
}
export const scrollEventImagesOne = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_EVENT_IMAGES_ONE:
            return action.payload
        default:
            return state
    }
}
export const scrollEventImagesTwo = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_EVENT_IMAGES_TWO:
            return action.payload
        default:
            return state
    }
}
export const scrollWeddingImagesOne = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_WEDDING_IMAGES_ONE:
            return action.payload
        default:
            return state
    }
}
export const scrollWeddingImagesTwo = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCROLL_WEDDING_IMAGES_TWO:
            return action.payload
        default:
            return state
    }
}
