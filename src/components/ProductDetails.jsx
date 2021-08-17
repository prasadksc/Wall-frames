import React from 'react'
import ImageSlides from './ImageSlides';


const ProductDetails = (props) => {

    const {items} = props;

    const id = props.match.params.id;



    function getItemById(items,id) {
        const item = items.filter(item => item.id === id);
        if (item) return item[0]
        return null;
    }


    const product = getItemById(items,id)
    


    return ( 
        <div className="productPage">
            <div className="productpage_info">
                <img src={product.img} alt={product.name} />
                <div className="productpage_about">
                    <h4>{product.name}</h4>
                    <hr />
                    <h6>Product details</h6>
                    <h6>{product.price}</h6>
                    <button>
                     Buy
                    </button>
                </div>
            </div>
            <div className="aboutproduct">
                <h5>Description</h5>
                <span>{product.description}</span>
            </div>
            <ImageSlides/>
        </div>
    );
}
 
export default ProductDetails;