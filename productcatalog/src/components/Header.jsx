import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {Container ,FormControl,Navbar} from "react-bootstrap";

const Header = () => {
  return (
       <Navbar className='nav'>
          <Container>
             <Navbar.Brand>
                <Link to="/"><h2>ShopNow</h2></Link>
             </Navbar.Brand>
             <Navbar.Text className='search'>
                 <FormControl style={{ width : 500 }} placeholder='Search a product' 
                  className='m-auto'
                 />
             </Navbar.Text>
             <Link to="/cart">
             <div className='cbtn'>
             <FaShoppingCart fontSize="25px"/>
             <p1>Cart</p1>
             </div>
             
             </Link>
          </Container>
       </Navbar>
  )
}

export default Header;
