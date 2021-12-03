import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const {signInUsingGoogle,signInUsingEmailPassword,error}= useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri=  location.state?.from || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInUsingEmailPassword(data.email,data.password,history,redirect_uri);
    };
    
    // send history,redirect_uri to signInUsingGoogle such that redirect to the target page after successfully login
     const handleGoogleSignIn=() =>{
        signInUsingGoogle(history,redirect_uri);
    }
    return (
        <div className="login-body">
             <div class="login-container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login" onSubmit={handleSubmit(onSubmit)}>
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
                        <Link to='/register' className="register-route">Register</Link>
                        <div class="social-login">
                            <h3>log in via</h3>
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
    );
};

export default Login;