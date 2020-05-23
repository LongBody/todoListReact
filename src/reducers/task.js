import * as types from '../constants/actionType'
var randomstring = require("randomstring");


let data = JSON.parse(localStorage.getItem("tasks"));
const InitialState = data ? data : "";


var findIndex = (id) => {
    let state = JSON.parse(localStorage.getItem("tasks"))
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
        case types.LIST_ALL:
            return state

        case types.ADD_TASK:
            if (action.task.id === '') {
                var newTask = {
                    id: randomstring.generate(7),
                    name: action.task.name,
                    status: (action.task.status === 'true' || action.task.status === true) ? true : false
                }

                state.push(newTask)
            } else {
                let index = findIndex(action.task.id)
                if (index !== -1) {
                    var newTask = {
                        id: action.task.id,
                        name: action.task.name,
                        status: (action.task.status === 'true' || action.task.status === true) ? true : false
                    }
                    state[index] = newTask
                }

            }

            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state]

        case types.UPDATE_STATUS:
            var id = action.status
            var index = findIndex(id);
            // case : get local storage again after add new
            state = JSON.parse(localStorage.getItem("tasks"));
            if (index !== -1) {
                state[index].status = !state[index].status
                localStorage.setItem("tasks", JSON.stringify(state))

            }
            return [...state]

        case types.DELETE_PRODUCT:
            var id = action.id
            var index = findIndex(id);
            // case : get local storage again after add new
            state = JSON.parse(localStorage.getItem("tasks"));
            if (index !== -1) {
                state.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(state))

            }
            return [...state]
        default:
            return state
    }
}

export default myReducer;