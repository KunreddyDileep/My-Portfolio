import React, {useEffect, useState} from "react";
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const words = ["Full Stack Developer", "Coder", "CS Graduate"];
  
    useEffect(() => {
        const currentWord = words[currentWordIndex];
        let letterIndex = 0;
        const typingInterval = setInterval(() => {
        setDisplayText(currentWord.slice(0, letterIndex + 1));
        letterIndex += 1;
        if (letterIndex > currentWord.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
            setDisplayText('');
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Time to wait before erasing
      }
    }, 200); // Typing speed
    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

    return (
        <div id="home" className='hero'>
            <h1>
                <span className="name">I'm Dileep Reddy Kunreddy,</span>{' '}
            </h1>
            <h1>
                <span className="animated-text">
                    <span className="text">{displayText}</span>
                </span>
            </h1>
            <p>I’m a Full Stack Developer, with expertise in building scalable, high-performance web applications.</p>
            <p>From crafting responsive user interfaces to designing robust backend architectures, I deliver end-to-end solutions that drive business success.</p>
            <p>Explore my work and see how I turn ideas into reality.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/drive/u/1/folders/17gQJ_Hbv4nLIli8r_DkkQlla7eLnZfr5" target="_blank" rel="noopener noreferrer" className="resume-link">My resume</a></div>
            </div>
        </div>
    )
}

export default Hero;
