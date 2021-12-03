import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyPackage.css';

const MyPackage = () => {
            const [mypackages,setMypackages]=useState([]);
            const [loading,setLoading]=useState(false);
            const {user}= useAuth();

            //load confirmed plan/package of login user based on email
            useEffect(()=>{
                axios.post(`https://guarded-fjord-59567.herokuapp.com/mypackage?email=${user.email}`)
                .then(res => {
                    setMypackages(res.data);
                    setLoading(true)
                })
            },[loading, user.email])
            console.log(user.email)
            //delete a plan/package
            const handleDelete=(_id)=>{
                const sure= window.confirm("Are you sure?")
                if(sure) {
                    axios.delete(`https://guarded-fjord-59567.herokuapp.com/mypackage?id=${_id}`)
                    .then(res => {
                        if(res.status){
                            setLoading(false)
                            alert("Deleted Successfully")
                        }
                    })
                }
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
                    <h3>Hello Mr. <span className="text-info">{user.displayName}</span>, This is your confirmed package list.</h3>
                    {
                        mypackages.map(mypackage=> <div
                        key={mypackage._id}
                        className="row g-4 m-3 border border-4"
                        >
                            <div className="col-lg-9 row">
                                <h4 className="col-lg-12">{mypackage.title}</h4>
                                <div className="col-lg-6"><i className="fas fa-map-marker-alt"></i><span > {mypackage.country}</span></div>
                                <div className="col-lg-6"><i className="fas fa-calendar-alt"></i> <span> {mypackage.date}</span></div>
                            </div>
                            <div className="col-lg-3 row">
                                <p>Official Status: <span className={mypackage.status ? "text-success" : "text-warning"}>{mypackage.status ? "Approved" : "Pending"}</span> </p>
                                <button onClick={()=>handleDelete(mypackage._id)} className="delete-btn" ><i className="fas fa-trash-alt me-2"></i>Delete</button>
                            </div>
                        </div>
                        )
                    }
                </div>
                }
            </div>
    );
};

export default MyPackage;