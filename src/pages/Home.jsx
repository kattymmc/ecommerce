import React from 'react'
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div className="Home">
        <AnnouncementBar />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  );
}

export default Home;
