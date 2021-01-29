import React from "react"
import PropTypes from "prop-types"
import getFormattedDate from "../../utils/getFormattedDate"
import { Container, Row, Col, Button } from "react-bootstrap"
import ReactMarkdown from 'react-markdown'
import {
   FacebookShareButton,
   FacebookIcon,
   TwitterShareButton,
   TwitterIcon,
   WhatsappShareButton,
   WhatsappIcon
} from "react-share"


const ViewPost = ({ post, auth, onDelete, onEdit }) => {
   const postDate = getFormattedDate(post.createdAt)
   console.log(post)
   const shareUrl = window.location.href
   return (
      <Container>
         <br></br>
         <FacebookShareButton
            quote={post.title}
            url={shareUrl}>
            <FacebookIcon size={"50px"} />
         </FacebookShareButton>
         <TwitterShareButton
            quote={post.title}
            url={shareUrl}>
            <TwitterIcon size={"50px"} />
         </TwitterShareButton>
         <WhatsappShareButton
            quote={post.title}
            url={shareUrl}>
            <WhatsappIcon size={"50px"} />
         </WhatsappShareButton>
         <br></br>
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
   )
}

ViewPost.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.bool.isRequired,
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired
}

export default ViewPost
