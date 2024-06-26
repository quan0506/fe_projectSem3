// import React from 'react';
import './footer.css';
import 'boxicons'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Company</h3>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#works">Works</a>
                <a href="#career">Career</a>
            </div>
            <div className="footer-section">
                <h3>Help</h3>
                <a href="#support">Customer Support</a>
                <a href="#delivery">Delivery Details</a>
                <a href="#terms">Terms & Conditions</a>
                <a href="#privacy">Privacy Policy</a>
            </div>
            
            <div className="footer-section newsletter">
                <h3>Subscribe to Newsletter</h3>
                <input type="email" placeholder="Enter email address" />
                <button>Join</button>
            </div>
            <div className="footer-contact">
                <p>Call Us: 1800 80 80 88</p>
                <p>Email Us: info@rareblocks.xyz</p>
                <div className="social-media">
                    <a href="#twitter"><box-icon name='twitter' type='logo' ></box-icon></a>
                    <a href="#facebook"><box-icon name='facebook' type='logo' ></box-icon></a>
                    <a href="#instagram"><box-icon type='logo' name='instagram-alt'></box-icon></a>
                    <a href="#github"><box-icon name='github' type='logo' ></box-icon></a>
                </div>
            </div>
            <p className="copyright">© Copyright 2021, All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
