import React from 'react';
import './WhyUs.css';
const WhyUs = () => {
    return (
        <div className="container px-4 mb-5">
            <h1 className="my-4 section-header">Why Choose Us?</h1>
            <div className="row g-4">
                <div className="col-lg-3">
                    <div className="first-cart">
                    <img className="img-icon" src="https://image.flaticon.com/icons/png/512/952/952228.png" alt="" />
                <p>Your Trusted Advisor</p>
                <small>We'll answer your every question.Our experienced travel experts and real-time on field 
                    know-how gives us this advantage.</small>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="second-cart">
                    <img className="img-icon"  src="https://image.flaticon.com/icons/png/512/1252/1252272.png" alt="" />
                    <p>We love listening</p>
                    <small>Your holiday,your terms. We'll fill in the blanks to plan the perfect trip in the blink of an eye.</small>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="third-cart">
                    <img className="img-icon"  src="https://image.flaticon.com/icons/png/512/470/470306.png" alt="" />
                    <p>Memorable Experiences</p>
                    <small>Do everything or do nothing. Either way, your holiday will be nothing less than extraordinary.</small>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="forth-cart">
                    <img className="img-icon"  src="https://image.flaticon.com/icons/png/512/1255/1255984.png" alt="" />
                    <p>Easy as ABC</p>
                    <small>Travel smooth and stress-free. That's how easy we make it because that's how your holiday should be.</small>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default WhyUs;