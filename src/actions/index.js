import * as types from '../constants/actionType'


export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}

export const updateState = (status) => {
    return {
        type: types.UPDATE_STATUS,
        status
    }
}

export const deleteList = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}


export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const editList = (task) => {
    return {
        type: types.EDIT_LIST,
        task
    }
}


export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const filterName = (name) => {
    return {
        type: types.FILTER_NAME,
        name
    }
}

export const filterStatus = (status) => {
    return {
        type: types.FILTER_STATUS,
        status
    }
}

export const searchingProduct = (keyword) => {
    return {
        type: types.SEARCHING_PRODUCT,
        keyword
    }
}

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}

export const onUpdateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product,
        quantity
    }
}


export const deleteProductCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_CART,
        product,
    }
}

export const onUpdateMessage = (message) => {
    return {
        type: types.UPDATE_MESSAGE,
        message,
    }
}

export const searchingNavBar = (keyword) => {
    return {
        type: types.SEARCHING_NAVBAR,
        keyword
    }
}