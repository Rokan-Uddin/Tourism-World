import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import TropicalVacation from '../TropicalVacation/TropicalVacation';
import WhyUs from '../WhyUs/WhyUs';
const Home = () => {
    // fetch data using useEffect and assing to packages variable 
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('https://guarded-fjord-59567.herokuapp.com/package')
        .then(res=>res.json())
        .then(data=>{
            setPackages(data)
        })
    },[])
    return (
        <div>
            
            <Banner></Banner>
            <div>
                {
                    !packages.length && <div>
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
                    </div>
                }
            </div>
            <h1  id="package" className="text-center my-5">UPCOMING WINTER 2021 TOURS</h1>
            <div className="container mb-5">
                <div className="row g-4">
                    {
                    packages.map((pkg)=><Packages
                    package={pkg}
                        ></Packages>
                    )
                    }
                </div>
            </div>
            <hr  className="container my-5" />
            <WhyUs></WhyUs>
            <TropicalVacation></TropicalVacation>
        </div>
    );
};

export default Home;