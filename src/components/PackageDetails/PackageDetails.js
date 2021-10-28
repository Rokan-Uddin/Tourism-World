import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './PackageDetails.css';
const PackageDetails = () => {
    const [loading,setLoading]=useState(false);
    const [packageDetails,setPackage]=useState({});
    const {serviceID}= useParams();
    useEffect(()=>{
      fetch(`https://guarded-fjord-59567.herokuapp.com/package/${serviceID}`)
      .then(response => response.json())
      .then(data => {
        setPackage(data)
        setLoading(true)
      })

    },[])
    console.log(serviceID)
    return (
      <div>
        {
          !loading && <div>
              <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
        }
        {
          loading &&         <div>
          <div className=" container mt-4 rounded-3 bg-info p-2">
          <p className="fs-1">"We care to see you smile."</p>
          </div>
      <div className="container my-5">
       <div className="row border-top">
           <hr />
          <div className="col-lg-5 col-sm-12">
              <img className="p-3 border border-secondary border-4 rounded-circle rounder-3 service-img" src={packageDetails.url} alt="" />
          </div>
          <div className="col-lg-7 col-sm-12 d-flex justify-content-center ">
             <div>
             <h2 className="mt-5">{packageDetails.name}</h2>
              <p>{packageDetails.description}</p>
              <Link to='/join' className="myButton mt-5" >Join with us</Link>
             </div>
          </div>
      </div>
      </div>

      </div>
        }
      </div>
    );
};

export default PackageDetails;