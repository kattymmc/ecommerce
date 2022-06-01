import React from 'react'
import './CategoryItem.css'

const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItem">
      <img src={item.img} />
      <div className="info">
        <h1>{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;