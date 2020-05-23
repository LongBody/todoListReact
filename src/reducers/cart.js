import * as types from '../constants/actionType'


let data = JSON.parse(localStorage.getItem("cart"));
const InitialState = data ? data : [];



const myReducer = (state = InitialState, action) => {
    let index =-1;
    let {product ,quantity} = action;
    let newState
    switch (action.type) {
        case types.ADD_TO_CART:              
            index = findProductInCart(state , product);
            if(index !==-1){
                state[index].quantity += quantity

            }
            else{
                newState = {
                    product : product,
                    quantity :quantity
                }               
                state.push(newState)              
            }
            localStorage.setItem("cart", JSON.stringify(state))   
            return [...state]

        case types.UPDATE_QUANTITY:
                index =  findProductInCart(state , product);
                if(index !== -1){
                    state[index].quantity = quantity              
                }                                       
                localStorage.setItem("cart", JSON.stringify(state))   
                return [...state]
        case types.DELETE_PRODUCT_CART:

            index =  findProductInCart(state , product);
            if (index !== -1) {
                state.splice(index, 1)
                localStorage.setItem("cart", JSON.stringify(state))

            }  
            return [...state]
        default: return state
    }
}


let findProductInCart= (cart , product) =>{
    let index = -1;
    if(cart.length > 0){
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].product.id === product.id){
                index = i;
                break;
            }     
        }
    }
 
    return index
}

export default myReducer