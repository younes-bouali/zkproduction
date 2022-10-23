import React from 'react'
import Menu from '../Menu'
import './Footer.css'
import SocialMedia from '../SocialMedia'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="footerWraper">
                <div className="leftFooter"><Menu /> </div>
                <div className="rightFooter">
                    <SocialMedia />
                    <span>  +213 555 30 88 91  zkproduction@gmail.com</span>
                </div>
            </div>
            <div className="copyright">Copyright 2022. Younes Bouali. All Rights Reserved</div>
        </div>
    )
}

export default Footer