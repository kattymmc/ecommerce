import { React, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import './ProductList.css'

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilter] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters, // Para que se setee el valor anterior seleccionado
            [e.target.name]: value
        })   
    }
    
    return (
        <div className="ProductList">
            <Navbar />
            <AnnouncementBar />
            <h1>{cat}</h1>
            <div className='filter-container'>
                <div className='filter'>
                    <span>Filter Products:</span>
                    <select name="color" onChange={handleFilters}>
                        <option disabled>Color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                    </select>
                    <select name="tamano" onChange={handleFilters}>
                        <option disabled>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className='filter'>
                    <span>Sort Products:</span>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="newest" disabled>Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc"> Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductList;