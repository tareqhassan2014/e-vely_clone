import React, { useEffect, useState } from 'react';
import './Product.css';
import ProductDitail from './ProductDitail/ProductDitail';

const Product = () => {
    const [products, setProducts] = useState([]);
    const loga = 2;
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, [loga]);
    return (
        <div className="product_container">
            {products.map((product) => (
                <ProductDitail product={product} key={Product.id} />
            ))}
        </div>
    );
};

export default Product;
