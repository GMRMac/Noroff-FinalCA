import React from "react";
import Heading from "../layout/Heading";
import Form from "react-bootstrap/form";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import FormControl from "react-bootstrap/formcontrol";
import Col from "react-bootstrap/col";
import "./login.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
//import "./contact.css";

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.min(5, "The password must consist of 5 or more symbols.")
		.max(32, "The password can't exceed the amount of 32 symbols.")
        .required("Please enter a password"),
});

export default function Login(){
    
    if(localStorage.getItem("user")){
        console.log("this");
    } else {
        console.log("that");
        localStorage.setItem("user","mac");
    }

    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <Heading title="Login" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className="form__label">Email:</Form.Label>
                    <Form.Control className="form__input" name="email" placeholder="Email" ref={register} />
                    {errors.email && <p>{errors.email.message}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form__label">Password:</Form.Label>
                    <Form.Control className="form__input" type="password" name="password" placeholder="Password" ref={register} />
                    {errors.password && <p>{errors.password.message}</p>}
                </Form.Group>
                <Button className="form__button" to="/home/" type="submit">Login</Button>
            </Form>
        </Col>
    );
}

    function onSubmit(data){
        console.log("data", data);
    }