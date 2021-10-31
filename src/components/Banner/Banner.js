import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
      <div className="container-fluid">
          <div className="banner row">
              <div className="col-lg-6 col-sm-12"></div>
              <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                  <div>
                      <h1 className="mt-5 banner-text">Wellcome to The Tourism World</h1>
                      <p className="p-5 fs-5 banner-description">“Travel makes one modest. You see what a tiny place you occupy in the world.”</p>
                        <Link to='/' className="myButton" >Contact Us</Link>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Banner;