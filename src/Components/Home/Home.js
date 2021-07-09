import React from 'react';
import Carousel from '../Carousel/Carousel';
import DropDown from '../DropDown/DropDown';
import NavigationBar from '../NavigationBar/NavigationBar';
import Product from '../Product/Product';
import './Home.css';

const Home = () => (
    <div className="home_div">
        <NavigationBar />
        <div className="container carouselAndDropdownContainer">
            <DropDown />
            <Carousel />
        </div>
        <Product />
    </div>
);

export default Home;
