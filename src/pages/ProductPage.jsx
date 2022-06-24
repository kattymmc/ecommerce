import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import Navbar from "../components/Navbar";
import AnnouncementBar from "../components/AnnouncementBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material';
import { publicRequest } from '../requestMethods';
import { useLocation } from 'react-router-dom';

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const ProductPage = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/product/find/" + id);
                setProduct(res.data);
            } catch {}
        }
        getProduct()
    }, [id]);

    const handleQuantity = (type) => {
        if(type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    return(
        <div className='ProductPage'>
            <Navbar />
            <AnnouncementBar />
            <div className='wrapper-page'>
                <div className='img-container-page'>
                    <img className='img-product-page' src={product.img} alt="Product"/>
                </div>
                <div className='info-container-page'>
                    <h1>{product.title}</h1>
                    <p>
                        {product.desc}
                    </p>
                    <span className='price'>$ {product.price}</span>
                    <div className='filter-container'>
                        <div className='filter'>
                            <span className='filter-title'>Color</span>
                            {product.color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                            ))}
                        </div>
                        <div className='filter'>
                            <span className='filter-title'>Size</span>
                            <select className='filter-size' onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <option key={s}>{s}</option>
                                ))}
                                <option>XS</option>
                            </select>
                        </div>
                    </div>
                    <div class='add-container'>
                        <div className='amount-container'>
                            <Remove onClick={() => handleQuantity("dec")} />
                            <span className='amount'>{quantity}</span>
                            <Add onClick={() => handleQuantity("inc")} />
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default ProductPage;