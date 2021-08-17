import React from 'react'
import { Link } from 'react-router-dom'


 


function Products(props) {
    const ProductsList = props.items.map(item => (
        <div className="product" key={item.id}>
            <Link to={`/products/${item.id}`} className="product_link">
            <img src={item.img} alt={item.name} />
            <div className="product_info">
                <h6>{item.name}</h6>
                <span>{item.price}</span>
            </div>
            </Link>
        </div>
    ))

    return ( 
        <div className="products">
            {
              ProductsList  
            }
        </div>
     );
}

export default Products;

