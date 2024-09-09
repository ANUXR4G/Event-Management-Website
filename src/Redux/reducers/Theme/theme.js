import { SET_THEME } from "../../actions/theme.action"

const initialState = 0

const theme = (state=initialState, action) => {
    switch(action.type){
        case SET_THEME:
            return action.payload
        default:
            return state
    }
}


export default theme