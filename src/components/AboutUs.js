import React from 'react'
import chef from '../images/Mario_and_Adrian_B.d933878ea314d41fca77.jpg';
import Footer from './Footer'

function AboutUs() {
    return (
        <div>
            <section className="about container section">
                <div className="about__container">
                    <div className="about__description-wrapper">
                        <h1 className="about__title">Little Lemon</h1>
                        <h2 className="about__subtitle">Chicago</h2>
                        <p className="about__text">
                            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                        <p className="about__text">
                            <br/>
                            Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                        </p>
                    </div>
                    <div className="about__img-wrapper">
                        <img  className="about__img" src={chef} alt="Mario and Adrian"
                        />
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutUs;