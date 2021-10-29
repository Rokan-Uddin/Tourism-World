import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
const Packages = (props) => {
    const {_id,name,description,url,location,price,startingDate,days}=props.service;
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="service p-4">
                <div className="row">
                    <div className="col-lg-7"><img src={url} alt="" /></div>
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <div>
                        <h2>{name}</h2>
                        <Link to={`/package/${_id}`} >
                        <button className="details-btn mt-2" >See Details</button>
                        </Link>
                        </div>
                    </div>
                </div>
                <div>{description.slice(0,200)} ...</div>
                <p>  {days} Days</p>
                <span>  Price: {price}</span>

                <p>  Country : {location}</p>
                <span>  Date: {startingDate}</span>
            </div>
        </div>
    );
};

export default Packages;

