import React from "react";
import Heading from "../layout/Heading";
import Form from "react-bootstrap/form";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/button";
import * as yup from "yup";
import FormControl from "react-bootstrap/formcontrol";
import Col from "react-bootstrap/col";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import "./contact.css";

const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	age: yup
		.number()
		.required()
		.integer()
		.min(10, "Age must be greater than 10")
		.max(30, "Age must be less than 10")
});

export default function Contact(){
    const {register, handleSubmit, watch, errors} = useForm({
        validationSchema: schema
    })
    
    return(
        <Col sm={{span:6, offset: 3}}>
            <Heading title="Contact us" />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label className="form__label">First name:</Form.Label>
                    <Form.Control className="form__input" name="firstName" placeholder="First name" ref={register} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </Form.Group>
                                                                                 
                <Form.Group>                                                                 
                    <Form.Label className="form__label">Last name:</Form.Label>
                    <Form.Control className="form__input" name="lastName" placeholder="Enter your email" ref={register}/>
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </Form.Group>
                     
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="form__label">Message:</Form.Label>
                    <Form.Control placeholder="Enter your message" className="form__input" as="textarea" rows="3" />
                </Form.Group>
                
                <Button className="form__button" type="submit">Submit</Button>
            </Form>
        </Col>
    );
}

    function onSubmit(data){
        console.log("data", data);
    }