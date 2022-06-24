import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
    <div className='Navbar container'>
        <div className='wrapper'>
            <div className='left'>
                <div className='language'>EN</div>
                <div className='searchContainer'>
                    <input placeholder='Search'/>
                    <Search style={{color: "gray", fontSize: 16}}/>
                </div>
            </div>
            <div className='center'>
                <h1>Hola</h1>
            </div>
            <div className='right'>
                <div className='menuItem'>REGISTER</div>
                <div className='menuItem'>SIGN IN</div>
                <div className='menuItem'>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
