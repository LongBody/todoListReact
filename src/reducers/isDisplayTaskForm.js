import * as types from '../constants/actionType'

const InitialState = false
 



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
        case types.OPEN_FORM:
            state = true
            return state
        case types.CLOSE_FORM:
            state= false
            return state
        case types.TOGGLE_FORM:
            state= true
            return state
        case types.EDIT_LIST:
            var id = action.id
            var task = action.task
            state= true
            // let index = findIndex(id, task);
            // console.log(index)
            // let taskEditing = task[index];
            // state = taskEditing
            return state
            
        default:
            return state
    }
}

export default myReducer