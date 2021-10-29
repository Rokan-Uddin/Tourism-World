import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
const Packages = (props) => {
    const {_id,name,description,url,location,price,startingDate,days}=props.package;
    return (
        <div className="col-lg-4 col-sm-12">
            <div className="">
                <div className="row cart">
                    <div className="col-lg-12"><img src={url} alt="" /></div>
                    <div>
                        <div>
                        <h5 className="text-start mt-3 text-primary">{name}</h5>
                        <div className="d-flex justify-content-between">
                        <p className=" text-start text-muted">From Dhaka to <span className="fw-bold">{location}</span></p>
                        <p className="bg-success text-white px-1 rounded-pill" >{days}D/{parseInt(days)-1}N</p>
                        </div>

                        </div>
                    </div>
                </div>
                <small>{description.slice(0,200)} ...</small>
                <div className="d-flex justify-content-between mx-3 pt-4">
                    <p>{startingDate}</p>
                    <h5>{price}</h5>
                </div>
                <Link to={`/package/${_id}`} >
                        <button className="bg-primary text-white border-0 rounded px-2" >See Details</button>
                        </Link>
            </div>
        </div>
    );
};

export default Packages;

