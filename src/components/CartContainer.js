import React,{useEffect} from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import {clearCart,getTotal} from '../actionFunctions';
const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(()=>{
    dispatch(getTotal())
  });
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(clearCart('cart clear'))}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  return{
    ...store,
    total:store.total,
    cart:store.cart
  }
}
export default connect(mapStateToProps)(CartContainer);
