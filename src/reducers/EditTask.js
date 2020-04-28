import * as types from '../constants/actionType'

const InitialState = {}

var findIndex = (id, state) => {
    let result = -1;
    state.forEach((task, index) => {
        if (task.id === id) {
            return result = index
        }
    })
    return result;
}


const myReducer = (state = InitialState, action) => {
    switch (action.type) {
        case types.EDIT_LIST:
            state = action.task
                // state = !state
            return state

        default:
            return state
    }
}

export default myReducer