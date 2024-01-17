import React from 'react'
import { Link } from 'react-router-dom';
import smallLogo from '../images/small_logo.png'

function Footer() {
    return (
        <div>
            <section className="footer container">
                <div className="footer__container">
                    <div className="footer__header-wrapper">
                        <div className="footer__title-container"><h4 className="footer__title">Doormat Navigation</h4>
                        </div>
                        <ul className="footer__ul">
                            <li>
                                <Link to="/" className="footer__link">Home</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs" className="footer__link">About</Link>
                            </li>
                            <li>
                                <Link to="/Reservations" className="footer__link">Reservations</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__header-wrapper">
                        <div className="footer__title-container">
                            <h4 className="footer__title">Contact</h4>
                        </div>
                        <ul className="footer__ul">
                            <li>123 Little Lemon St</li>
                            <li>Chicago, Illinois</li>
                            <br/>
                            <li>(123) 456-7890</li>
                            <br/>
                            <li>littlelemon@email.com</li>
                        </ul>
                    </div>
                    <div className="footer__header-wrapper">
                        <div className="footer__title-container">
                            <h4 className="footer__title">Social Media Links</h4>
                        </div>
                        <ul className="footer__ul">
                            <li><a href={'https://www.facebook.com'}>Facebook</a></li>
                            <li><a href={'https://www.instagram.com'}>Instagram</a></li>
                            <li><a href={'https://www.youtube.com'}>YouTube</a></li>
                            <li><a href={'https://www.twitter.com'}>X</a></li>
                            <li><a href={'https://www.yelp.com'}>Yelp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__img-container">
                    <img className="small__logo" src={smallLogo} alt="logo"/>
                    <p className="footer__copyright">Copyright ©️ Little Lemon 2024</p>
                </div>
        </section>
        </div>
    )
}

export default Footer;