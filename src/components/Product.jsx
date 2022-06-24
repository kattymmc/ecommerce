import React from 'react'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (
    <div className="Product">
        <img src={item.imagen} alt='producto'/>
        <div className='circle'></div>
        <div className='info'>
            <div className='icon'>
                <ShoppingCartOutlined />
            </div> 
            <div className='icon'>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                </Link>
            </div>
            <div className='icon'>
                <FavoriteBorderOutlined />
            </div>
        </div>
    </div>
  );
};

export default Product;