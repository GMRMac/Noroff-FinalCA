import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CharacterDetailContainer from "../characters/detail/CharacterDetailContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact"
import "./Layout.css"
import Login from "../login/Login.js"

const loginStatus = false;

export default function Layout() {
        console.log("hi");
        return (
            <Router>
                <Navbar expand="lg">
                    <NavLink to="/home">    
                        <Navbar.Brand href="#home">MTG</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/home/" className="nav-link">Home</NavLink>
                            <NavLink to="/about/" className="nav-link">About</NavLink>
                            <NavLink to="/contact/" className="nav-link">Contact us</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>

                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/character/:multiverseid" component={CharacterDetailContainer} />

                    </Switch>
                </Container>
            </Router>
        );
}