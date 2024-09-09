export const SET_LANDING_IMAGES = "SET_LANDING_IMAGES"
export const SET_SCROLL_EVENT_IMAGES_ONE = "SET_SCROLL_EVENT_IMAGES_ONE"
export const SET_SCROLL_EVENT_IMAGES_TWO = "SET_SCROLL_EVENT_IMAGES_TWO"
export const SET_SCROLL_WEDDING_IMAGES_ONE = "SET_SCROLL_WEDDING_IMAGES_ONE"
export const SET_SCROLL_WEDDING_IMAGES_TWO = "SET_SCROLL_WEDDING_IMAGES_TWO"

export const setLandingImages = (payload) => (dispatch) => {
    dispatch({
        type: SET_LANDING_IMAGES,
        payload: payload,
    });
};

export const setScrollEventImagesOne = (payload) => (dispatch) => {
    dispatch({
        type: SET_SCROLL_EVENT_IMAGES_ONE,
        payload: payload,
    });
};
export const setScrollEventImagesTwo = (payload) => (dispatch) => {
    dispatch({
        type: SET_SCROLL_EVENT_IMAGES_TWO,
        payload: payload,
    });
};
export const setScrollWeddingImagesOne = (payload) => (dispatch) => {
    dispatch({
        type: SET_SCROLL_WEDDING_IMAGES_ONE,
        payload: payload,
    });
};
export const setScrollWeddingImagesTwo = (payload) => (dispatch) => {
    dispatch({
        type: SET_SCROLL_WEDDING_IMAGES_TWO,
        payload: payload,
    });
};