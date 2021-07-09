import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../image/bxs-chevron-right.svg';
import './DropDown.css';

const DropDown = () => (
    <div className="DropDownContainer">
        <Link to="/">
            Desktop <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Labtop <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Mens Watch <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Microwave oven <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Motor Bike <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Rafigarator <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Smart Phone <img src={icon} alt="" />
        </Link>
        <Link to="/">
            Smart TV and Android TV <img src={icon} alt="" />
        </Link>
    </div>
);

export default DropDown;
