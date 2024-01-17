import React from 'react'
import {Link} from  'react-router-dom'
import heroImg from '../images/restaurantfood.jpg'

function Hero() {
    return (
        <div>
            <section className="hero container">
                <div className="hero__wrapper__container">
                    <div className="hero__heading">
                        <h1 className="hero__title">Little Lemon</h1>
                        <h2 className="hero__subtitle">Chicago</h2>
                        <p className="hero__description">
                            We are a family owned <br/>Mediterranean restaurant,<br/> focused on traditional <br/>recipes served with a modern twist.</p>
                        <Link to="/Reservations" className="hero__btn btn2">Reserve a Table</Link>
                    </div>
                    <div className="hero__img-wrapper">
                        <img className="hero__img" src={heroImg} alt="Mediterranean food"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;