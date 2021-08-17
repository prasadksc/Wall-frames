import React from 'react';
import Joi from 'joi-browser';
import Form from './reusableComponents/Form';
import { Link } from 'react-router-dom';


class LoginForm extends Form {
    state = { 
        data : {email:"",password:""},
        errors:{}
     };

     schema = {
         email: Joi.string().required(),
         password: Joi.string().required(),
     }

    

     doSubmit = () => {}

    render() { 

       


        const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RoluJqLo6UUcbkKnUmSWa8pNRhlq9VKOjw&usqp=CAU"

        return ( 
            <div className="loginform">
                <h2>Login</h2>
                <div className="login_logo">
                    <Link to="/"><img src={img} alt="logo" /></Link>
                </div>
                <form onSubmit={this.handleSubmit} className="loginform_data">
                    {this.renderInput("email","Email")}
                    {this.renderInput("password","Password","password")}
                    {this.renderButton("Login")}
                </form>
                <div className="register_link">
                    <Link to="/register"><button className="btn btn-primary">Register</button></Link>
                </div>
            </div>
         );
    }
}
 
export default LoginForm;
