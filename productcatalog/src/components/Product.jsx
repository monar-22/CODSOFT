import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import "../App.css";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id] || 0;

  return (
  <div className="product">
  <Link to={`/product/${id}`} className="product-link">
    <img src={productImage} alt={productName} />
    <div className="description">
      <p className='pr'><b>{productName}</b></p>
      <p >₹{price}</p>
    </div>
  </Link>
  <button className="addToCartBttn" onClick={() => addToCart(id)}>
    Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
  </button>
</div>

  );
};

export default Product;
