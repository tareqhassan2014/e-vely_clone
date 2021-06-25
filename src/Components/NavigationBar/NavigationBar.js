import React, { useState } from 'react';
import logo from '../../image/online-shop (1).svg';
import './NavigationBar.css';

const NavigationBar = () => {
    const [mobailMenu, setMobailMenu] = useState(false);

    const handelMobailMenue = () => {
        setMobailMenu(!mobailMenu);
    };

    return (
        <nav className="navBarItems">
            <div className="menu_icon" onClick={handelMobailMenue} role="button" tabIndex="0">
                <i className={mobailMenu ? 'fas fa-times' : 'fas fa-bars'} />
            </div>

            <img src={logo} alt="logo" className="logo" />

            <div className="search_box">
                <input type="search" className="search_intut" placeholder="Search" />
                <div className="Search_button">
                    <i className="fa fa-search" />
                </div>
            </div>

            <ul className="nav_menue">
                <li>
                    <span className="fas fa-shopping-cart" />
                </li>
                <li>
                    <span className="fas fa-bell" />
                </li>
                <li>
                    <span className="fas fa-envelope" />
                </li>
                <li>
                    <span className="fas fa-user" />
                </li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
