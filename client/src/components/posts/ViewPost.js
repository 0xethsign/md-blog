import React from "react"
import PropTypes from "prop-types"
import getFormattedDate from "../../utils/getFormattedDate"
import { Container, Row, Col, Button } from "react-bootstrap"
import ReactMarkdown from 'react-markdown'


const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.createdAt)
   console.log(post)
   return (
      <Container>
         <hr></hr>
         <Row>
            <Col>
               <h2>{post.title}</h2>
            </Col>
         </Row>
         <Row style={{ whiteSpace: "pre-wrap" }}>
            <Col>
               <ReactMarkdown>
                  {post.markdown}
               </ReactMarkdown>
            </Col>
         </Row>
         <Row>
            <Col>Created by : {post.author}</Col>
            <br></br>
            <Col>Date: {postDate}</Col>
         </Row>
         <br></br>
         {auth && (
            <Row>
               <Col>
                  <Button onClick={onEdit}>
                     Edit
                  </Button>
                  <Button onClick={onDelete}>
                     Delete
                  </Button>
               </Col>
            </Row>
         )}
         <hr></hr>
      </Container>
   );
};

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
};

export default ViewPost;
