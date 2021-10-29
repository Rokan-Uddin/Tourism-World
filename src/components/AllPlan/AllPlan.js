import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllPlan = () => {
    const [mypackages,setMypackages]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:5000/allconfirmedpackage')
        .then(res => {
            setMypackages(res.data);
            setLoading(true)
        })
    },[loading])
    const handleDelete=(_id)=>{
        const sure= window.confirm("Are you sure?")
        if(sure) {
            axios.delete(`http://localhost:5000/mypackage?id=${_id}`)
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
                        <button>Update</button>
                        <button onClick={()=>handleDelete(mypackage._id)} >Delete</button>
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