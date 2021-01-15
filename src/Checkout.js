import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js'
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <h2 className="checkout_title">YOUR SHOPPING BASKET</h2>
            {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              Price={item.Price}
              rating={item.rating}
            />
          ))}      
            </div>
            <div className="checkout_right">
                <Subtotal />         
            </div>
        </div>
    )
}

export default Checkout
