import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllPlan = () => {
    const [mypackages,setMypackages]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        axios.get('https://guarded-fjord-59567.herokuapp.com/allconfirmedpackage')
        .then(res => {
            setMypackages(res.data);
            setLoading(true)
        })
    },[loading])
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
             <h3>This is confirmed package list of all tourists.</h3>

            {
                mypackages.map(mypackage=> <div
                key={mypackage._id}
                className="row g-4 m-3 border border-4"
                >
                    <div className="col-lg-9 row">
                        <h4 className="col-lg-12">{mypackage.title}</h4>
                        <p className="col-lg-6">{mypackage.country}</p>
                        <p className="col-lg-6">{mypackage.date}</p>
                    </div>
                    <div className="col-lg-3 row">
                        <p>Tourist: <span className="text-success">{mypackage.name}</span></p>
                        <button onClick={()=>handleDelete(mypackage._id)} ><i class="fas fa-trash-alt me-2"></i>Delete</button>
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