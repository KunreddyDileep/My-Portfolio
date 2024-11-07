import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo_icon from '../../assets/logo_icon.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
    };

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.pageYOffset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight) {
                setMenu(sectionId);
            }
        });

        // Sticky navbar background change on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='navbar'>
            <img src={logo_icon} alt="Logo" />
            <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
                <li>
                    <AnchorLink className={`anchor-link ${menu === "home" ? "active" : ""}`} href='#home'>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className={`anchor-link ${menu === "about" ? "active" : ""}`} offset={50} href='#about'>
                        <p onClick={() => setMenu("about")}>About Me</p>
                    </AnchorLink>
                    {menu === "about" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className={`anchor-link ${menu === "services" ? "active" : ""}`} offset={50} href='#services'>
                        <p onClick={() => setMenu("services")}>Skills</p>
                    </AnchorLink>
                    {menu === "services" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className={`anchor-link ${menu === "work" ? "active" : ""}`} offset={50} href='#work'>
                        <p onClick={() => setMenu("work")}>Projects</p>
                    </AnchorLink>
                    {menu === "work" && <img src={underline} alt='' />}
                </li>
                <li>
                    <AnchorLink className={`anchor-link ${menu === "contact" ? "active" : ""}`} offset={50} href='#contact'>
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" && <img src={underline} alt='' />}
                </li>
            </ul>
            <div className="nav-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
        </div>
    );
};

export default Navbar;
