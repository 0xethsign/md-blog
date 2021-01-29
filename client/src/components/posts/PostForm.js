import React from "react"
import PropTypes from "prop-types"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import Input from "../form/Input"
import Textarea from "../form/Textarea"

const PostForm = ({ post, onChange, onBlur, loading, onSubmit }) => {
   const { title, body, headerImage, errors } = post
   return (
      <Container>
         <Row>
            <Col>
               <Form noValidate onSubmit={onSubmit}>
                  <br></br>
                  <Input
                     name="title"
                     type="text"
                     placeholder="Enter Post Title"
                     value={title}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Title",
                        error: errors.title
                     }} />
                  <br></br>
                  <Form.Group>
                     <Form.File
                        name="headerImage"
                        type="image"
                        value={headerImage}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="exampleFormControlFile1"
                        label="Upload header image" />
                  </Form.Group>
                  <br></br>

                  <Textarea
                     name="body"
                     placeholder="Write your markdown here..."
                     value={body}
                     onChange={onChange}
                     onBlur={onBlur}
                     text={{
                        module: "post",
                        label: "Description",
                        error: errors.body
                     }} />
                  <br></br>
                  <Button
                     variant="outline-info"
                     type="submit"
                     disabled={loading}>
                     Submit
                  </Button>

               </Form>
            </Col>
         </Row>
      </Container>
   );
};

PostForm.propTypes = {
   post: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
   onBlur: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired
}

export default PostForm
