import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.facebook.com/mathias.garnica/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} color="#4267B2" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://www.instagram.com/matiasgarnicaok22/reels/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} color="#C13584" />
            </a>
        </div>
    );
};

export default Footer;


