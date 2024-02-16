import React from 'react';
import './Projects.css';

const Projects = () => {
    const st={ textAlign: 'center' };
  return (
    <div>
      <section id="projects">
        <p className="sec_txt_p1 " style={st} >Browse my recent</p>
        <h1 className="title" style={st}>Projects</h1>
        <div className="exp-det-con">
          <div className="abt-con">

            <div className="det-con color-con">
              <div className="article-con">
                <img src="images/do1.jpg" alt="project" className="proj-img" />
              </div>
              <h2 className="exp-sub-tit proj-title">Health Track</h2>
              <div className="btn-con">
                <button className="btn btn-color-2 proj-btn">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </button>

              </div>
            </div>

            <div class="det-con color-con">
            <div class="article-con">
                <img src="images/lemon_res.png" alt="project" class="proj-img" />
            </div>
            <h2 class="exp-sub-tit proj-title">UI/UX design</h2>
            <div class="btn-con">
            
                <button class="btn btn-color-2 proj-btn">
                    <a href="https://github.com" target="_blank">GitHub</a>
                </button>
                
            </div>
           
        </div>

        <div class="det-con color-con">
            <div class="article-con">
                <img src="images/heaven.png" alt="project" class="proj-img" />
            </div>
            <h2 class="exp-sub-tit proj-title">HeavenPick</h2>
            <div class="btn-con">
            
                <button class="btn btn-color-2 proj-btn">
                    <a href="https://github.com/monar-22/HeavenPick" target="_blank">GitHub</a>
                </button>
                
            </div>
           
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
