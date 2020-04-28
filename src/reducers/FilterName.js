import * as types from '../constants/actionType'

const InitialState = ''



const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.FILTER_NAME:
            return action.name

        default:
            return state
    }
}

export default myReducer