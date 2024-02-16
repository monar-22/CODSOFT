import React from 'react';
import './Home.css';
// import {Link} from 'react-scroll';

const Home = () => {
    const handleDownload = () => {
    window.open('/images/Resume.pdf', '_blank');
  };

  return (
    <section id='home'>
        <div className="homeCon">
        <img src="images/dp2.jpg" alt="Profile" className='bg'></img>
             <span className='hello'>Hello,</span>
             <span className="homeText">I'm <span className="homeName">Mona</span><br />FullStack Developer</span>
             <p className="homePara">I am a skilled Developer with the passion of development</p>

             
                  <button className="homeBtn" onClick={handleDownload}>
                   Download CV
                  </button>
                  
        </div>
        
    </section>
  )
}

export default Home;
