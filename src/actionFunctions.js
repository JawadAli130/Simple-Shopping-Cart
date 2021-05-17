import * as actions from './actions';

export const clearCart = (description) =>{
    return{
        type:actions.CLEAR_CART,
        payload:{
            description
        }
    }
}

export const removeItem = (id) =>{
    return{
        type:actions.REMOVE,
        payload:{
            id
        }
    }
}

export const increaseItem = (id) =>{
    return{
        type:actions.INCREASE,
        payload:{
            id
        }
    }
}

export const decreaseItem = (id,amount) =>{
    return{
        type:actions.DECREASE,
        payload:{
            id,
            amount
        }
    }
}

export const getTotal = () =>{
    return{
        type:actions.GET_TOTALS
    }
}

export const toggleFun = (id,toggle) =>{
    return{
        type:actions.TOGGLE_AMOUNT,
        payload:{
            id,
            toggle
        }
    }
}