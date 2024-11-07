import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import github_icon from '../../assets/github_icon.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c6f5f3ba-9caa-418b-8c64-f25c7fc5b9d6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Connect</h1>
                    <p>I'm currently looking for the new job roles, Please reach out to me if there are any new opportunities</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>dileepreddy0612@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+1 347-951-1219</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>TN, United States</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/profile.php?id=100008811604840" target="_blank" rel="noopener noreferrer">
                        <img src={facebook_icon} alt="Facebook Icon" />
                        </a>
                        <a href="https://www.instagram.com/k_dileep_reddy/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src={instagram_icon} alt="Instagram Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/dileep0612/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_icon} alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/KunreddyDileep" target="_blank" rel="noopener noreferrer">
                        <img src={github_icon} alt="GitHub Icon" />
                        </a>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Contact