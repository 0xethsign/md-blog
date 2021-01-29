import React from "react"
import { Container } from "react-bootstrap"
import "./Landing.module.css"

const Landing = () => (
   <Container>
      <h1 style={{ margin: "20px" }}> Blogging App</h1>
      <p>This is a markdown blog, made using node, express, react, redux and mongodb. </p>
   </Container>
)

export default Landing
