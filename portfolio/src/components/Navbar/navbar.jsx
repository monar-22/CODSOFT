import React from 'react';
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
         {/* <img src="" alt="" /> */}
         <h1 className='heading'>Mona</h1>
         <div className='desktopMenu'>
              <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
              <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuList">About</Link>
              <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Skills</Link>
              <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuList">Projects</Link>
              
         </div>
         <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
         }}> 
             <img src="" alt="" className="desktopMenuImg" />Contact Me
         </button>
    </nav>
  )
}

export default Navbar;
