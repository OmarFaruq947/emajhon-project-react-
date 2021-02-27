import React from 'react';
import logo from '../../img/logo.png';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" srcset=""/>
            <nav>
                <a href="">Shop</a>
                <a href="">order Review</a>
                <a href="">Mange Inventory</a>
            </nav>
        </div>
    );
};

export default Header;