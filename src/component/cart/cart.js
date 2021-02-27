import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;

let total = 0;
for (let i =0; i< cart.length; i++){
    const product = cart[i];
    total = total + product.price;
}

    let shipping =0;
if(total > 35){
    shipping=4.99;
}
else if (total > 15){
    shipping = 4.99;
}
else if(total > 0){
    shipping =12.99;
}

const tax = (total / 10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);

const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}

    return (
        <div>
            <h4>Order Summary</h4>
            <hr/>
            <p>items Ordered: {cart.length} </p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax / vat: {tax}</small></p>
            <p>Total price:{grandTotal}</p>
            <button className="Buy-now-btn">Buy Now</button>
        </div>
    );
};

export default Cart;