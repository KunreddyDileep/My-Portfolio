import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import portfolio_photo2 from '../../assets/portfolio_photo2.jpg'

const Navbar = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={portfolio_photo2} alt="" width="400" height="800" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate Full Stack Developer with experience in creating dynamic, user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I specialize in crafting seamless digital experiences from concept to deployment.</p>
                    <p>My skill set includes HTML5, CSS3, React, JavaScript, Java, and cloud services like AWS, allowing me to build scalable and efficient solutions that meet diverse business needs. I thrive in collaborative environments and enjoy solving complex problems through innovative design and code.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML5</p><hr style={{width:"190%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>CSS3</p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Spring Boot</p><hr style={{width:"65%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Databases</p><hr style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <hr/>
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default Navbar