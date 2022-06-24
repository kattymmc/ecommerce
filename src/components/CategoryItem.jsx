import React from 'react'
import { Link } from 'react-router-dom';
import './CategoryItem.css'

const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItem">
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} alt="" />
        <div className="info">
          <h1>{item.title}</h1>
          <button>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;