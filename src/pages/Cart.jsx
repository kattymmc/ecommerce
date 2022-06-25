import React from 'react'
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import './Cart.css'
import { Add, Remove } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { userRequest } from '../requestMethods';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KEY = process.env.REACT_APP_STRIPE;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props => props.color)};
`

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });
                history.push("/success", { data: res.data });
            } catch {}
        }
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, history]);

    console.log(stripeToken);
    return (
        <div className='Cart'>
            <Navbar />
            <AnnouncementBar />
            <div className="cart-wrapper"> 
                <h1 className="cart-title">YOUR BAG</h1>
                <div className='top'>
                    <button className='top-button'>CONTINUE SHOPPING</button>
                    <div className='top-texts'>
                        <span className='top-text'>Shopping Bags(2)</span>
                        <span className='top-text'>Your Wishlist(0)</span>
                    </div>
                    <button className='top-button filled'>CHECKOUT NOW</button>
                </div>
                <div className='bottom'>
                    <div className='info'>
                        {cart.products.map((product) => (
                            <div className='product'>
                                <div className='product-detail'>
                                    <img src={product.imagen} alt="Product"/>
                                    <div className='details'>
                                        <span className='product-name'><b>Product:</b>{product.titulo}</span>
                                        <span className='product-id'><b>ID:</b> {product._id}</span>
                                        <ProductColor color={product.color} />
                                        <span className='product-size'><b>Size:</b> {product.tamano}</span>
                                    </div>
                                </div>
                                <div className='price-detail'>
                                    <div className='product-amount-container'>
                                    <Add />
                                    <span className='product-amount'>{product.quantity}</span>
                                    <Remove />
                                    </div>
                                    <span className='product-price'>$ {product.precio * product.quantity}</span>
                                </div>
                            </div>
                        ))}
                        <hr />
                    </div>
                    
                    <div className='summary'>
                        <h1 className='summary-title'>ORDER SUMMARY</h1>
                        <div className='summary-item'>
                            <span className='summary-item-text'>Subtotal</span>
                            <span className='summary-item-price'>$ {cart.total}</span>
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
                            <span className='summary-item-price'>$ {cart.total}</span>
                        </div>
                        <StripeCheckout
                            name="Katty Shop"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}>
                        </StripeCheckout>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;