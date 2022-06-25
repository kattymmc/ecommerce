import React from 'react'
import Navbar from '../components/Navbar';
import AnnouncementBar from '../components/AnnouncementBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="Home">
        <Navbar />
        <AnnouncementBar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default Home;
