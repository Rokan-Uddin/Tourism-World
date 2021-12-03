import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const AllPlan = () => {
            const [mypackages,setMypackages]=useState([]);
            const [loading,setLoading]=useState(false);

            //load all confirmed plan/plackage of all user
            useEffect(()=>{
                axios.get('https://guarded-fjord-59567.herokuapp.com/allconfirmedpackage')
                .then(res => {
                    setMypackages(res.data);
                    setLoading(true)
                })
            },[loading])

            //delete a confirmed plan/package 
            const handleDelete=(_id)=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div className='custom-ui'>
                          <h1>Are you sure?</h1>
                          <p>You want to delete this file?</p>
                          <button onClick={onClose} className="yes-no">No</button>
                          <button
                            onClick={() => {
                                axios.delete(`https://guarded-fjord-59567.herokuapp.com/mypackage?id=${_id}`)
                                .then(res => {
                                    if(res.status){
                                        setLoading(false)
                                    }
                                    else{
                                        alert("Something is wrong,please try again")
                                    }
                                })
                              onClose();
                            }}
                            className="yes-no"
                          >
                            Yes
                          </button>
                        </div>
                      );
                    }
                  });
            }

            //update plan pending/approved status
            const handleUpdate=(_id,status)=>{
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div className='custom-ui'>
                          <h1>Are you sure?</h1>
                          <p>You want to delete this file?</p>
                          <button onClick={onClose} className="yes-no">No</button>
                          <button
                            onClick={() => {
                                axios.put(`https://guarded-fjord-59567.herokuapp.com/mypackage?id=${_id}&&status=${status}`)
                                .then(res => {
                                    if(res.status){
                                        setLoading(false)
                                    }
                                    else {
                                        alert("Something is wrong,please try again.")
                                    }
                                })
                              onClose();
                            }}
                            className="yes-no"
                          >
                            Yes
                          </button>
                        </div>
                      );
                    }
                  });
            }
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
            <div className="container mt-5">
                <h3>This is confirmed package list of all tourists.</h3>

                {
                    mypackages.map(mypackage=> <div
                    key={mypackage._id}
                    className="row g-4 m-3 border border-4"
                    >
                        <div className="col-lg-9 row">
                            <h4 className="col-lg-12">{mypackage.title}(<span className="fs-6">
                                <i className={ !mypackage.status ? "fas fa-spinner me-2 text-danger" : "fas fa-check-circle me-2 text-success"}></i>
                                {mypackage.status ? "Approved" : "Pending"}</span>)
                            </h4>
                            <div className="col-lg-6"><i className="fas fa-map-marker-alt"></i><span > {mypackage.country}</span></div>
                            <div className="col-lg-6"><i className="fas fa-calendar-alt"></i> <span> {mypackage.date}</span></div>
                        </div>
                        <div className="col-lg-3 row">
                            <p>Tourist: <span className="text-primary">{mypackage.name}</span></p>
                            
                            <div className="m-0">
                            <button onClick={()=>handleDelete(mypackage._id)} className="delete-btn" ><i className="fas fa-trash-alt me-2"></i>Delete</button>
                            <button onClick={()=>handleUpdate(mypackage._id,mypackage.status)} className={ mypackage.status ? "approve-btn px-3" : "reject-btn px-3"} >
                                {mypackage.status ? "Reject" : "Approve"}
                            </button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            }
        </div>
    );
};

export default AllPlan;