import React from 'react'
import { PRODUCTS } from '../Products';
import Product from './Product';
import "../App.css";

const Home = () => {
  return (
    <div className='shop'>
      <div className='products'>
        {" "}
        {PRODUCTS.map((product)=>(
          
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Home;
