import React, { forwardRef } from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-centre">
                <img src="media/media/homeHero.png" alt="hero-Image"></img>
                <h1>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button>SignUp Now</button>
            </div>
        </div>

     );
}

export default Hero;