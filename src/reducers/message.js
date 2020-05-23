import * as types from '../constants/actionType'
import * as MSG from '../constants/message'


const InitialState = MSG.MSG_YOUR_CART



const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.UPDATE_MESSAGE:
            state = action.message 
            return [...state]
        default: return state
    }
}


export default myReducer