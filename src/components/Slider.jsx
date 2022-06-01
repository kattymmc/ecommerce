import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import './Slider.css'
import { sliderItems } from '../data'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <div className='Slider container'>
            <div className='arrow left' onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </div>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <div className='slide' key={item.id}>
                        <div className='imgContainer'>
                            <img src={item.img} alt="" background-color={item.bg}/>
                        </div>
                        <div className='infoContainer'>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button>Hello</button>
                        </div>
                    </div>
                ))}
            </Wrapper>
            <div className='arrow right' onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}

export default Slider