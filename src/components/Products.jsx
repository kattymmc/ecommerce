import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { popularProducts } from '../data'
import Product from './Product';
import './Products.css'

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat ? `http://localhost:5000/api/product?categoria=${cat}`
                                         : "http://localhost:5000/api/product");
        setProducts(res.data);
      } catch (err) {}
    }
    getProducts()
  }, [cat]) 

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value]) => 
          item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters]);

  useEffect(() => {
    if(sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="Products">
        {cat ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
             : products
                .slice(0, 8)
                .map((item) => <Product item={item} key={item.id} />)
        }
    </div>
  );
};

export default Products;