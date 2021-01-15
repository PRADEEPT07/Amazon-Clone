import React from 'react'
import Product from "./Product.js";
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
              <div className="home_row">
              <Product
              id = "1" 
              title="Iphone X"
              Price={999.0}
              image="iphonex.png"/>
              <Product
              id="2" 
              title="Iphone X PRO"
              Price={1199.0}
              image="iphonex.png"/>
              <Product 
              id="3" 
              title="Iphone X PRO MAX"
              Price={1499.0}
              image="iphonex.png"/>  
            </div>
            <div className="home_row">
                <Product 
                id="4" 
                title="Macbook"
                Price={999.0}
                image="Laptop.png"/>
                <Product 
                id="5" 
                title="Macbook Pro"
                Price={1499.0}
                image="Laptop.png"/>
                <Product
                id="6"  
                title="Macbook Max"
                Price={1999.0}
                image="Laptop.png"/>
            </div>
            </div>
        </div>
    )
}

export default Home
