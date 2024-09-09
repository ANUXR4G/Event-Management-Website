import { SET_MOBILE } from "../../actions/ismobile.action"

const initialState = false

const mobile = (state=initialState, action) => {
    switch(action.type){
        case SET_MOBILE:
            return action.payload
        default:
            return state
    }
}


export default mobile