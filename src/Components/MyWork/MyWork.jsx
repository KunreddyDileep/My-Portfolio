import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showMore, setShowMore] = useState(false); // State to handle "Show More" and "Show Less"

    const handleImageClick = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore); // Toggle between showing more or less
    };

    // Limit displayed projects based on "showMore" state
    const displayedProjects = showMore ? mywork_data : mywork_data.slice(0, 3);

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {displayedProjects.map((work, index) => (
                    <img 
                        key={index} 
                        src={work.w_img} 
                        alt={work.w_name} 
                        onClick={() => handleImageClick(work)} 
                    />
                ))}
            </div>
            <div className="mywork-showmore" onClick={toggleShowMore}>
                <p>{showMore ? "Show Less" : "Show More"}</p>
                <img src={arrow_icon} alt="" />
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="project-description">
                        <h2>{selectedProject.w_name}</h2>
                        <p>{selectedProject.description}</p>
                        <a 
                            href={selectedProject.github_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyWork;
