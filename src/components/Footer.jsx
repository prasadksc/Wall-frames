import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="company">
                <div className="company_about">
                    
                    <ul>
                        <h4>COMPANY</h4>
                        <li>Shipping</li>
                        <li>Return Policy</li>
                        <li>Work with Us</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="company_socialmedia">
                    <h4>FOLLOW US OUT THERE</h4>
                    <ul>
                        <li><SocialIcon className="icon" url="https://www.facebook.com/shopify/"/></li>
                        <li><SocialIcon className="icon" url="https://www.instagram.com/shopify/"/></li>
                        <li><SocialIcon className="icon" url="https://twitter.com/Shopify?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"/></li>
                        <li><SocialIcon className="icon" url="https://www.pinterest.com/shopify/"/></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h4>NEWSLETTER</h4>
                    <form className="news_form">
                        <input type="email" name="email" id="email" placeholder="your@email.com"/>
                        <button>SUBSCRIBE</button>
                    </form>

                </div>
            </div>
            <span>Copyright@ 2021 Grid Bright</span>
            <p>Powered by shopify</p>
        </div>
     );
}
 
export default Footer;