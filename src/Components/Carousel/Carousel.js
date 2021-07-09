import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [products, setProducts] = useState([]);
    const loga = 2;
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [loga]);

    return (
        <div className="carousel_container">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={products[0]?.image}
                            className="d-block  carosol_image"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={products[1]?.image}
                            className="d-block  carosol_image"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={products[2]?.image}
                            className="d-block  carosol_image"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
