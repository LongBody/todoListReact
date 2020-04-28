import * as types from '../constants/actionType'

const InitialState = ''



const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.FILTER_STATUS:
            console.log(action)
            return action.status

        default:
            return state
    }
}

export default myReducer