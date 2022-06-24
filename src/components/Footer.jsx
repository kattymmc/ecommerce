import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react'
import './Footer.css'
import styled from 'styled-components'

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Footer = () => {
    return (
      <div className="Footer">
            <div className='left'>
                <h1>LAMA.</h1>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </p>
                <div className='social-container'>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </div>
            </div>
            <div className='center'>
                <h3>Useful Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Man Fashion</li>
                    <li>Woman Fashion</li>
                    <li>Accessories</li>
                    <li>My Account</li>
                    <li>Order Tracking</li>
                    <li>Wishlist</li>
                    <li>Wishlist</li>
                    <li>Terms</li>
                </ul>
            </div>
                
            <div className='right'>
                <h3>Contact</h3>
                <div className='contact-item'>
                    <Room style={{marginRight:"10px"}}/>622 Dixie Path , South Tobinchester 98336
                </div>
                <div className='contact-item'>
                    <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                </div>
                <div className='contact-item'>
                    <MailOutline style={{marginRight:"10px"}}/> contact@lama.dev
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment Options"/>
            </div>

      </div>
    );
  };
  
  export default Footer;