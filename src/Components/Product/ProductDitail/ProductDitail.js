import React from 'react';
import './ProductDitail.css';

const ProductDitail = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { price, image, title } = props.product;
    return (
        <div className="product_card">
            <img src={image} alt="" />
            <p>$ {price}</p>
            <p>{title}</p>
        </div>
    );
};

export default ProductDitail;
