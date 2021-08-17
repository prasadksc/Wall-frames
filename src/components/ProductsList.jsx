import React from 'react'
import { Link } from 'react-router-dom';
import image2 from '../images/image2.jpg'

const ProductsList = ({items}) => {
    return ( 

        <div className="productsList">
            <img className="productsList_banner"src={image2} alt="banner" />
            <div className="products">
            {
              items.map(item => (
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
            }
                </div>
        </div>
     );
}
 
export default ProductsList;