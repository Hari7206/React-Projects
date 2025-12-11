import React from 'react'
import "./Hero.css"
import flipkartLogo from '../../assets/flipkarpng.png';
import AmazoneLogo from '../../assets/amazone-removebg-preview.png'
import Shoes from '../../assets/Shoes.png'

function Hero() {
  return (
    <div className='hero-section'>
        <div className="heading">
            <div className="main-heading">
                <h1>
                    Your feet 
                    deserve 
                    the best
                </h1>
            </div>
            <div className="sub-heading">
                <h5>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </h5>
            </div>
                <div className="buttons">
                    
            <button className='shop-now'> Shop Now </button>

            <button className='category'> Category </button>
                </div>

            <footer className='footer'>
                <p className='footer-detail'> Also Available On</p>
                <a href="" className='footer-img'><img src={flipkartLogo} alt="" /></a>
                <a href=""   className='footer-img'><img src={AmazoneLogo} alt="" /></a>
            </footer>
        </div>
        <div className="boot-img">
            <img src={Shoes} alt="" />
        </div>

    </div>
  )
}

export default Hero