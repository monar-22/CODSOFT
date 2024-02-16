import React, { useContext } from 'react'
import { PRODUCTS } from "../Products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from './cart-item';
import { useNavigate } from "react-router-dom";
import "../App.css";

const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className='cart'>
      {/* <div>
        <h1>
          Your Cart Items
        </h1>
      </div> */}
      <div className='cartItems'>
          {PRODUCTS.map((product)=>{
             if(cartItems[product.id] !==0 )
             return <CartItem data={product} />
          })}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
        <h5><b>Subtotal: ₹{totalAmount}</b></h5>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
      </div>
      : <h2 className='msg'>Your Cart is Empty!</h2>}
    </div>
  )
}

export default Cart;
