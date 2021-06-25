import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import InterviewExperience from './InterviewExperience';
import Statistics from './Statistics';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class navbar extends React.Component {
    render() {

      const navStyle = {
        color: "white",
        textDecoration: 'none',
        paddingLeft: 13,
        paddingRight: 13
      }

     

      return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

                 
          <Nav className="ml-auto">
            <Nav.Link style={navStyle} href="/">Home</Nav.Link>
            <Nav.Link style={navStyle} href="/statistics">Statistics</Nav.Link>
            <Nav.Link style={navStyle} href="/interviewexperience">Interview Experience</Nav.Link>
            
          </Nav>
          
          <Button size="lg"  variant="outline-success">Singup</Button>
          <Button size="lg"  variant="outline-success">Login</Button>

          

        </Navbar.Collapse>
      </Navbar>
      );
    }
  }

  export default navbar;