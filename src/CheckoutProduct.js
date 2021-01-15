import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, Price,hideButton }) {
    const [{basket},dispatch] = useStateValue();
        console.log(basket);
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="img"/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{Price}</strong>
                </p>
                
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct