import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <nav className="navbar">
            <img src={logo} alt="Vikas Logo" className='logo'/>
            
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass='active' to='certificates' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Certifications</Link>
            </div>

            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me
            </button>

            {/* Mobile Menu Icon */}
            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

            {/* Mobile Dropdown Menu */}
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link to='skills' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link to='projects' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link to='certificates' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Certifications</Link>
                <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
