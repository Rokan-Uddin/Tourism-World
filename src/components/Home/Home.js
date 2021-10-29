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
            <div className="border border-4 m-5">
            <h1 className="text-center my-5">Wellcome to The Tourism World</h1>
            <p className="container text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem ea facilis ipsum voluptates modi porro placeat eveniet nam et ipsa.</p>
            <h3>valo kicu add mara lagbe</h3>
            <h3>Previous Experience types kicu</h3>
            </div>

            <hr  id="package" className="container my-5" />
            <h1 className="text-center my-5">WINTER 2021 TOURS</h1>
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
            <div className="border border-4 m-5">
            </div>
        </div>
    );
};

export default Home;