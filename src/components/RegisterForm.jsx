import React from 'react';
import Joi, { push } from 'joi-browser';
import Form from './reusableComponents/Form';

class RegisterForm extends Form {
    state = { 
        data:{
            firstname:"",
            lastname:"",
            username:"",
            mobile:"",
            email:"",
            password:""
        },
        errors:{},
     };

     schema = {
         firstname: Joi.string().required().label("Firstname"),
         lastname: Joi.string().required().label("Lastname"),
         username: Joi.string().required().label("Username"),
         mobile: Joi.number().required().label("Mobile"),
         email: Joi.string().required().email().label("Email"),
         password: Joi.string().required().min(5).label("Password")
     };


     doSubmit = () => {
         push('/')
     };


    render() { 
        return ( 
        <div className="registerform" >
            <h2>Register</h2>
            <form onSubmit={this.handleSubmit} className="registerform_data">
               {this.renderInput("firstname","Firstname")}
               {this.renderInput("lastname","Lastname")}
               {this.renderInput("username","Username")}
               {this.renderInput("mobile","Mobile")}
               {this.renderInput("email","Email")}
               {this.renderInput("password","Password","password")}
               {this.renderButton("Register")}
            </form>
        </div> );
    }
}
 
export default RegisterForm;

