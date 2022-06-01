import React from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import './Product.css'

const Product = ({item}) => {
  return (
    <div className="Product">
        <img src={item.img} alt='producto'/>
        <div className='circle'></div>
        <div className='info'>
            <div className='icon'>
                <ShoppingCartOutlined />
            </div> 
            <div className='icon'>
                <SearchOutlined />
            </div>
            <div className='icon'>
                <FavoriteBorderOutlined />
            </div>
        </div>
    </div>
  );
};

export default Product;