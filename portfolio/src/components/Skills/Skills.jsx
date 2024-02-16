import './Skills.css';

import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <p className="sec_txt_p1" style={{ textAlign: 'center', marginTop: '50px' }}>Explore My</p>
      <h1 className="title" style={{ textAlign: 'center', marginBottom: '8px' }}>Skills</h1>
      <div className="exp-det-con">
        <div className="abt-con">
          <div className="det-con">
            <h2 className="exp-sub-tit">Programming</h2>
            <div className="article-con">
              <article>
                <img src="images/checkmark.png" alt="exp icon" className="icon" />
                <div>
                  <h3>C</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>C++</h3>
                        <p>Beginner</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>Java</h3>
                        <p>Intermediate</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>Datastructure</h3>
                        <p>Begineer</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>UI/UX</h3>
                        <p>Experienced</p>
                    </div>
                </article>


            </div>
          </div>
          <div className="det-con">
            <h2 className="exp-sub-tit">FullStack Development</h2>
            <div className="article-con">
              <article>
                <img src="images/checkmark.png" alt="exp icon" className="icon" />
                <div>
                  <h3>React</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>NodeJs</h3>
                        <p>Intermediate</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>ExpressJs</h3>
                        <p>Intermediate</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>MySql</h3>
                        <p>Intermediate</p>
                    </div>
                </article>

                <article>
                    <img src="images/checkmark.png" alt="exp icon" class="icon"/>
                    <div>
                        <h3>MongoDB</h3>
                        <p>Beginner</p>
                    </div>
                </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

