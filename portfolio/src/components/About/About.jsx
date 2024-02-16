import React from 'react'
import './About.css';


const About = () => {
  return (
  <div>
    <section id="about">
      <p className="sec_txt_p1" style={{ textAlign: 'center'}}>Get To Know More</p>
      <h1 className="title" style={{ textAlign: 'center', marginBottom: '10px' }}>About Me</h1>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Education</h2>

      <div className="abt">
        <div className="tcon">
          <div className="time">
            <ul>
              <li>
                <div className="time-con">
                  <h1>Alagar Public School</h1>
                  <h2>2018-2019</h2>
                  <p>SSLC-84%</p>
                </div>
              </li>
              <li>
                <div className="time-con">
                  <h1>Alagar Public School</h1>
                  <h2>2020-2021</h2>
                  <p>HSC-90%</p>
                </div>
              </li>
              <li>
                <div className="time-con">
                  <h1>Sri Eshwar College of Engineering</h1>
                  <h2>2021-2025</h2>
                  <p>CGPA-8.1</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default About
