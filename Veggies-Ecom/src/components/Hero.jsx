import React from 'react'
import '../styles/hero.scss'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__container'>
            <div className='hero__container-title'>
                <h1>Organic Veggies & Foods For You!</h1>
            </div>
            <div className='hero__container-text'>
                <p> Explore a world of fresh, vibrant goodness at our marketplace, where handpicked fruits and vegetables await. Celebrate nature's bounty with our curated selection, delivering the finest quality for your healthy lifestyle. Welcome to a place where freshness meets convenience, inspiring vibrant living.</p>
            </div>
            <div className='hero__container--button'>
                <button>Subscribe <FaArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero