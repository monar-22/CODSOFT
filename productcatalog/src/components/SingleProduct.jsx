import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { PRODUCTS } from "../Products";
import "../App.css";

function SingleProduct() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProductDetails = () => {
      const productDetails = PRODUCTS.find(product => product.id.toString() === id);

      if (productDetails) {
        setProduct(productDetails);
      } else {
        console.error('Product not found');
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="single-product">
      {product ? (
        <>
          <img src={product.productImage} alt={product.productName} />
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p className="price">Price: ₹{product.price}</p>
            <p className="description">{product.description}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleProduct;

