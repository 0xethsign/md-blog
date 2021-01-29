import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap"
import Input from "../form/Input"

const SignUp = ({ loading, user, onBlur, onChange, onSubmit }) => {
   const { user_name, email, password, errors } = user
   return (
      <Container>
         <Row>
            <Col>
               <Card >
                  <Form noValidate onSubmit={onSubmit}>
                     <Card.Body>
                        <Card.Title>
                           SignUp
                        </Card.Title>
                        <Input
                           name="user_name"
                           type="text"
                           placeholder="Enter Username"
                           value={user_name}
                           onChange={onChange}
                           onBlur={onBlur}
                           text={{
                              module: "SignUp",
                              label: "Username",
                              error: errors.user_name
                           }}
                        />
                        <Input
                           name="email"
                           type="email"
                           placeholder="Enter Email"
                           value={email}
                           onChange={onChange}
                           onBlur={onBlur}
                           text={{
                              module: "SignUp",
                              label: "Email",
                              error: errors.email
                           }}
                        />
                        <Input
                           name="password"
                           type="password"
                           placeholder="Enter Password"
                           value={password}
                           onBlur={onBlur}
                           onChange={onChange}
                           text={{
                              module: "SignUp",
                              label: "Password",
                              error: errors.password
                           }}
                        />
                        <Button
                           variant="info"
                           type="submit"
                           disabled={loading}
                        >
                           Submit
                        </Button>
                        <Card.Text >
                           Already have an account?{" "}
                           <Link to={"/login"}>Login</Link>.
                        </Card.Text>
                     </Card.Body>
                  </Form>
               </Card>
            </Col>
         </Row>
      </Container>
   )
}

SignUp.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired
}

export default SignUp
