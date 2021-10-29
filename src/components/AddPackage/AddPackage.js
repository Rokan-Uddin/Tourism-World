import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/add',data)
        .then(res=>{
            alert("Added Successfully")
            reset()
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
                    {errors.days &&  <span className="error">Days is required</span>}
                    <textarea  placeholder="Description" {...register("description", {required:true})} />
                    {errors.description &&  <span className="error">Description is required</span>}
                    <input  placeholder="Image url" {...register("url", {required:true})} />
                    {errors.url &&  <span className="error">Image URL is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;