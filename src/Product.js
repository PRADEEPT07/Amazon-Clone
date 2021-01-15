import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider.js'

function Product({id,title,Price,image}) {
    const [{basket},dispatch] = useStateValue();
    console.log(basket);
    
    const addtobasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                Price:Price,
                image:image,

            }
        });
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                <small>$</small>
                <strong>{Price}</strong>
                </p>
            </div>
            <img src={image} alt="img"/>
            <button onClick={addtobasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
