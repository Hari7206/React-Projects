import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


function Main() {
    return (
        <div className='main'>
            <div className="nav">
                <p>Margdarshak</p>
                <img src={assets.user} alt="" />
            </div>
            <div className='main-container'>
                <div className="greet">
                    <p><span>Hello , hajur</span></p>
                    <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor, fugit expedita voluptatum ipsa veritatis, </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor, fugit expedita voluptatum ipsa veritatis, </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor, fugit expedita voluptatum ipsa veritatis, </p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor, fugit expedita voluptatum ipsa veritatis, </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter your pompt here ' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'> Margdarshak may display inaccurate information, including details about people, so always double-check its responses. <br />
                        Your privacy and Margdarshak apps are important — stay aware and stay safe.</p>
                </div>
            </div>
        </div>
    )
}

export default Main