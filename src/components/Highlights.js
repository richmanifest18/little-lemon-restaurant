import React from 'react'
import greekSalad from '../images/greek salad.jpg'
import bruschetta from '../images/bruchetta.svg'
import lemonDessert from '../images/lemon dessert.jpg'
import deliveryIcon from '../images/delivery.jpg'

function Highlights() {
    return (
        <section className="highlights container section">
            <div className="highlights__title-wrapper">
                <h1 className="highlights__title">This week's specials!</h1>
            </div>
            <div className="highlights__card-wrapper">
                <div className="card">
                    <img className="card__image" src={greekSalad} alt="Greek salad"/>
                    <div className="card__name-price-wrapper">
                        <p className="card__title">Greek Salad</p>
                        <p className="card__price">$12.99</p>
                    </div>
                    <p className="card__description">The famous greek salad of lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and croutons.</p>
                    <div className="card__delivery-wrapper">
                        <p className="order__delivery-title">Order a Delivery</p>
                        <img className="delivery__icon" src={deliveryIcon} alt="delivery"/>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={bruschetta} alt="bruschetta"/>
                    <div className="card__name-price-wrapper">
                        <p className="card__title">Bruschetta</p>
                        <p className="card__price">$5.99</p>
                    </div>
                    <p className="card__description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sea salt and house-maid olive oil.</p>
                    <div className="card__delivery-wrapper">
                        <p className="order__delivery-title">Order a Delivery</p>
                        <img className="delivery__icon" src={deliveryIcon} alt="delivery"/>
                    </div>
                </div>
                <div className="card">
                    <img className="card__image" src={lemonDessert} alt="lemon dessert"/>
                    <div className="card__name-price-wrapper">
                        <p className="card__title">Lemon Dessert</p>
                        <p className="card__price">$5.00</p>
                    </div>
                    <p className="card__description">This comes straight from grandma’s recipe book, every ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div className="card__delivery-wrapper">
                        <p className="order__delivery-title">Order a Delivery</p>
                        <img className="delivery__icon" src={deliveryIcon} alt="delivery"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;