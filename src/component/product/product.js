import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';


const Product = (props) => {
    console.log(props);
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" srcset=""/>
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock}left in stock - order soon</small></p>
                <button className="main-btn"
                onClick={() => props.handleAddProduct(props.product)} // onclick r moddhe je arro function ace ta auto exicute theke mukti dibe
                > <FontAwesomeIcon icon={faShoppingCart} /> Add to curt</button>
            </div>
        </div>

    );
};

export default Product;