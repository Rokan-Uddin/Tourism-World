import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
const Register = () => {
    const {createUser,signInUsingGoogle,error}= useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri=  location.state?.from || '/home';
    const { register, handleSubmit, formState: { errors } } = useForm();
    // send history,redirect_uri with registration data such than 
    // redirect to the target page after successfull registration 
    const onSubmit = data => {
        createUser(data.email,data.password,data.name,history,redirect_uri);
    };
        // send history,redirect_uri to signInUsingGoogle such that redirect to the target page after successfully login
        const handleGoogleSignIn=() =>{
            signInUsingGoogle(history,redirect_uri);
        }
    return (
        <div className="login-body">
             <div class="login-container">
                <div class="screen">
                    <div class="screen__content_register">
                        <form class="login" onSubmit={handleSubmit(onSubmit)}>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Name" {...register("name", {required:true})}  /> 
                                <br />
                                {errors.name &&  <span className="error">Name is required</span>}
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Email" {...register("email", {required:true})}  /> 
                                <br />
                                {errors.email &&  <span className="error">Email is required</span>}
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password" {...register("password", { required: true })} /> 
                                <br />
                                {errors.password &&  <span className="error">Password is required</span>}
                            </div>
                            {error && !errors.email && !errors.password && <span className="error">{error}</span>}
                            <button class="button login__submit">
                                {/* <span class="button__text">Log In Now</span> */}
                                <input type="submit" className="submitBtn" />
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <Link to='/login' className="register-route">Login</Link>
                        <div class="social-login">
                            <h3>sign up via</h3>
                            <div class="social-icons">
                                <button onClick={handleGoogleSignIn} class="social-login__icon fab fa-google google-btn"> Google </button>
                            </div>
                        </div>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
        // <div className="mb-5">
        //     <h1 className="mt-4">Registration Form</h1>
        //         <div className="container d-flex justify-content-center align-items-center mt-5">
        //         <form className="register-form" onSubmit={handleSubmit(onSubmit)}>//
        //             <input placeholder="Name" {...register("name", {required:true})} />
        //             {errors.name &&  <span className="error">Name is required</span>}
        //             <input placeholder="Email" {...register("email", {required:true})} />
        //             {errors.email &&  <span className="error">Email is required</span>}
        //             <input type="password" placeholder="Password" {...register("password", { required: true })} />
        //             {errors.password &&  <span className="error">Password is required</span>}
        //             {error && !errors.name && !errors.email && !errors.password && <span className="error">{error}</span>}
        //             <input className="submit-btn" type="submit" />
        //         </form>

        //     </div>
        //     <div>
        //         <p>Already registered?</p>
        //         <Link to='/login'>Sign In</Link>
        //         <div>----------or-----------</div>
        //         <button onClick={handleGoogleSignIn}  className="google-btn" >
        //         <img className="logo" 
        //              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" 
        //              alt="" />
        //              Continue with Google</button>

        //     </div>
        // </div>
    );
};

export default Register;