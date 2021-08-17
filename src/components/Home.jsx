import React from 'react'
import ImageSlides from './ImageSlides';
import Products from './Products'



const Home = ({items}) => {
    return ( 
        <div className="Home">
        <ImageSlides/>
        <Products items={items}/>
    </div>
     );
}
 
export default Home;