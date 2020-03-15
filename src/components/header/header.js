import React from 'react';
import './header.css';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header-container">
            <div className="menu"></div>
            <div className="copyright">
                <span className="copy">&copy; Łukasz Dyszy </span>
                <a className="gh" target="blank" href="https://github.com/lukaszdyszy/rc-timer"><FaGithub size={28}/></a>
            </div>
        </div>
    )
}

export default Header;