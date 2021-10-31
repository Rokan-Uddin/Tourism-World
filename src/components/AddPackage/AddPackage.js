import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './AddPackage.css';
const AddPackage = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        axios.post('https://guarded-fjord-59567.herokuapp.com/add',data)
        .then(res=>{
            alert("Added Successfully")
            reset()
            history.push('/');
        })
    };
    return (
        <div>
              <h1 className="mt-3">Make a Tour Plan.</h1>
              
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                    <input  placeholder="Title" {...register("name", {required:true})} />
                    {errors.name &&  <span className="error">Title is required</span>}
                    <input  placeholder="Price" {...register("price", {required:true})} />
                    {errors.price &&  <span className="error">Price is required</span>}
                    <input  placeholder="Location" {...register("location", {required:true})} />
                    {errors.location &&  <span className="error">Location is required</span>}
                    <input type="date" placeholder="Date" {...register("startingDate", {required:true})} />
                    {errors.startingDate &&  <span className="error">Date is required</span>}
                    <input   placeholder="Days" {...register("days", {required:true})} />
                    {errors.days &&  <p className="error">Days is required</p>}
                    <textarea  placeholder="Description" {...register("description", {required:true})} rows="6" cols="35" />
                    {errors.description &&  <p className="error">Description is required</p>}
                    <input type="url" placeholder="Image url" {...register("url", {required:true})} />
                    {errors.url &&  <span className="error">Image URL is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;