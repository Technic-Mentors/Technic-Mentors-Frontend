import React, { useEffect } from 'react';
import Waypoint from 'waypoint';

const SkillsSection = () => {
  
    useEffect(() => {
        const initProgressBars = () => {
          let skillsContent = document.querySelector('.skills-content');
    
          if (skillsContent) {
            new Waypoint({
              element: skillsContent,
              offset: '80%',
              handler: function (direction) {
                let progressBars = document.querySelectorAll('.progress .progress-bar');
                progressBars.forEach((el) => {
                  el.style.width = el.getAttribute('aria-valuenow') + '%';
                });
              }
            });
          }
        };
    
        initProgressBars();
      }, []);
  return (
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">Laravel <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Laravel <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Repeat the same structure for each progress bar here */}
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">VueJs <i className="val">85%</i></span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            {/* Repeat the same structure for each progress bar here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
