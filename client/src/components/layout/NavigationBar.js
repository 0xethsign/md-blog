import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.module.css'
const Navigationbar = ({ auth, onClick }) => (
   <Navbar>

      <ul>
         <li><a href="/">Home</a></li>
         <li><a href="/blog">Blogs</a></li>
         <Nav className="ml-auto">
            {auth ? (
               <li><Link to="/logout">
                  <Button
                     onClick={onClick}>
                     Logout
               </Button>
               </Link>
               </li>
            ) : (
                  <li><Link to="/login">
                     <Button>Login</Button></Link>
                  </li>
               )}
         </Nav>
      </ul>

   </Navbar>
)

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
}

export default Navigationbar
