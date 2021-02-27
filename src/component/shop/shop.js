import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/cart';
import Product from '../product/product';
import './shop.css';

const Shop = () => {
   // const allData = fakeData; // for all data see.
    const first10= fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart]=useState([]); // add cart programme include kora hoyce

    const handleAddProduct = (product)=> {
        console.log("added product",product);
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        
                        ></Product>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;