import * as actions from "./actions";

import {cartItems} from "./cart-items";
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};

export function reducer(state=initialStore, action) {
  if (action.type === actions.CLEAR_CART) {
    return { ...state, cart: [] };
  }
  
  if (action.type === actions.REMOVE) {
    return{
      ...state,
      cart:state.cart.filter(item=>item.id !== action.payload.id)
    }
  }
  
  if(action.type === actions.GET_TOTALS ){
    let {total,amount} = state.cart.reduce((cartTotal,cartItem)=>{
      const {price,amount} = cartItem;
      const itemTotal = price*amount;
      cartTotal.total = cartTotal.total+itemTotal;
      cartTotal.amount = cartTotal.amount+amount;
      return cartTotal;
    },{total:0,amount:0});
    total = parseFloat(total.toFixed(2));
    return {...state,total,amount};
  }

  if (action.type === actions.TOGGLE_AMOUNT) {
    return {
      ...state,
      cart: state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id  && action.payload.toggle === "inc") {
          return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
        }
        if (cartItem.id === action.payload.id && action.payload.toggle === "dec" ) {
          return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
        }
        return cartItem;
      })
    };
  }

  return state;
}


