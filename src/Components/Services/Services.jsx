import React, {useState} from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

 const Services = () => {

    const [expanded, setExpanded] = useState([]);

    const toggleReadMore = (index) => {
        setExpanded(expanded.includes(index)
            ? expanded.filter(i => i !== index)
            : [...expanded, index]);
    };

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
            {Services_Data.map((service, index) => {
                const isExpanded = expanded.includes(index);
                const shortDesc = service.s_desc.slice(0, 30); // Adjust character count as needed

                return (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>
                            {isExpanded ? service.s_desc : `${shortDesc}...`}
                        </p>
                        <div className="services-readmore" onClick={() => toggleReadMore(index)}>
                            <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                            <img src={arrow_icon} alt="Read More Icon" />
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    )
 }

 export default Services