import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import './Cart.css'
import { Add, Remove } from '@mui/icons-material';

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props => props.color)};
`

const Cart = () => {
    return (
        <div className='Cart'>
            <Navbar />
            <AnnouncementBar />
            <div class="cart-wrapper"> 
                <h1 className="cart-title">YOUR BAG</h1>
                <div className='top'>
                    <button className='top-button'>CONTINUE SHOPPING</button>
                    <div className='top-texts'>
                        <span class='top-text'>Shopping Bags(2)</span>
                        <span class='top-text'>Your Wishlist(0)</span>
                    </div>
                    <button className='top-button filled'>CHECKOUT NOW</button>
                </div>
                <div className='bottom'>
                    <div className='info'>
                        <div className='product'>
                            <div className='product-detail'>
                                <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' alt="Product"/>
                                <div className='details'>
                                    <span className='product-name'><b>Product:</b> JESSIE THUNDER SHOES</span>
                                    <span className='product-id'><b>ID:</b> 93475848123</span>
                                    <ProductColor color='black' />
                                    <span className='product-size'><b>Size:</b> 37.5</span>
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div className='product-amount-container'>
                                <Add />
                                <span className='product-amount'>2</span>
                                <Remove />
                                </div>
                                <span className='product-price'>$ 30</span>
                            </div>
                        </div>
                        <hr />
                        <div className='product'>
                            <div className='product-detail'>
                                <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' alt="Product" />
                                <div className='details'>
                                    <span className='product-name'><b>Product:</b> JESSIE THUNDER SHOES</span>
                                    <span className='product-id'><b>ID:</b> 93475848123</span>
                                    <ProductColor color='black' />
                                    <span className='product-size'><b>Size:</b> 37.5</span>
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div className='product-amount-container'>
                                <Add />
                                <span className='product-amount'>2</span>
                                <Remove />
                                </div>
                                <span className='product-price'>$ 30</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='summary'>
                        <h1 className='summary-title'>ORDER SUMMARY</h1>
                        <div className='summary-item'>
                            <span className='summary-item-text'>Subtotal</span>
                            <span className='summary-item-price'>$ 80</span>
                        </div>
                        <div className='summary-item'>
                            <span className='summary-item-text'>Estimated Shipping</span>
                            <span className='summary-item-price'>$ 5.90</span>
                        </div>
                        <div className='summary-item'>
                            <span className='summary-item-text'>Shipping Discount</span>
                            <span className='summary-item-price'>$ -5.90</span>
                        </div>
                        <div className='summary-item total'>
                            <span className='summary-item-text'>Total</span>
                            <span className='summary-item-price'>$ 80</span>
                        </div>
                        <button className='summary-button'>CHECKOUT</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;