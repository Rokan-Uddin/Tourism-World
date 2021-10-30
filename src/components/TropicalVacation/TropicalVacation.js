import React, { useEffect, useState } from 'react';
import './TropicalVacation.css';
const TropicalVacation = () => {
    const [vacations,setVacations]=useState([]);
    useEffect(()=>{
        fetch("https://guarded-fjord-59567.herokuapp.com/vacations")
        .then(res=>res.json())
        .then(data=>setVacations(data));
    },[])
    return (
        <div className="container">
            <h1>6 Best Tropical Vacations</h1>
            <p className="mb-5">Dreamy beaches, silky warm seas, lush scenery, and endless sunshine – these are some of the top ingredients of 
            the ideal tropical vacation. But each destination offers its own sultry charms. Some dazzle with their natural beauty. 
            Others add cultural attractions to the mix, with exotic customs, architecture, and mouthwatering cuisine. A few offer eco-adventures and 
            wildlife-rich wilderness, and some sleepy islands seem to take you back in time.</p>
            <div className="row g-4">
                {
                    vacations.map(vacation=><div
                    key={vacations._id}
                    className="col-lg-6 col-sm-12"
                    >
                        <div className="vacation-cart">
                        <h4>{vacation.name}</h4>
                        <img src={vacation.url} alt="" />
                        <p className="text-start text-secondary ms-3">{vacation.title}</p>
                        <small className="">{vacation.description}</small>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TropicalVacation;