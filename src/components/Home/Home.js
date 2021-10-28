import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
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
            <h1 className="text-center my-5">Wellcome to The Tourism World</h1>
            <p className="container text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea facilis ipsum voluptates modi porro placeat eveniet nam et ipsa.</p>
            
            <hr  id="package" className="container my-5" />
            <h1 className="text-center my-5">Our packages</h1>
            <div className="container mb-5">
                <div className="row g-4">
                    {
                    packages.map((service)=><Packages
                        service={service}
                        ></Packages>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;