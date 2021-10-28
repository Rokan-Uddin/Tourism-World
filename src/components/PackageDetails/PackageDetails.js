import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PackageDetails.css';
const PackageDetails = () => {
    const [loading,setLoading]=useState(false);
    const [packageDetails,setPackage]=useState({});
    const {serviceID}= useParams();
    const {user}=useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    useEffect(()=>{
      fetch(`https://guarded-fjord-59567.herokuapp.com/package/${serviceID}`)
      .then(response => response.json())
      .then(data => {
        setPackage(data)
        setLoading(true)
      })

    },[])
    const onSubmit = data => {
      data.email=user.email;
      data.name=user.displayName;
      data.packageId=serviceID;
      data.title=packageDetails.name;
      axios.post('http://localhost:5000/package', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('added successfully');
              reset();
          }
      })
  };
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

              <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input value={user.displayName} readOnly  />
                    <input value={user.email} readOnly />
                    <input  placeholder="Address" {...register("address", {required:true})} />
                    {errors.address &&  <span className="error">Address is required</span>}
                    <input   placeholder="Phone" {...register("phone", {required:true})} />
                    {errors.phone &&  <span className="error">Phone is required</span>}
                    <input   placeholder="Total Member" {...register("quantity", {required:true})} />
                    {errors.quantity &&  <span className="error">Number of Tourist should be confirmed</span>}
                    <input type="submit" />
                </form>
            </div>
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