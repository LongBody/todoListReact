import * as types from '../constants/actionType'

const InitialState = ''



const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.SEARCHING_NAVBAR:
            console.log(action)
            return action.keyword

        default:
            return state
    }
}

export default myReducer