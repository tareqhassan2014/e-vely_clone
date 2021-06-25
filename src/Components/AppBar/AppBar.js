import React from 'react';
import mobailNavigation from '../../image/list-text.svg';
import logo from '../../image/online-shop.svg';
import './Appbar.css';

const AppBar = () => (
    <header>
        <nav>
            <div className="mobail_navigation">
                <img src={mobailNavigation} alt="" />
            </div>

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="search_box">
                <input type="search" className="search_intut" placeholder="Search" />
                <div className="Search_button">
                    <i className="fa fa-search" />
                </div>
            </div>

            <ul>
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
    </header>
);

export default AppBar;
