import React from "react"
import PropTypes from "prop-types"
import Card from "react-bootstrap/Card"
import getFormattedDate from "../../utils/getFormattedDate"


const Post = ({ post }) => {
   const postDate = getFormattedDate(post.createdAt)
   return (
      <Card className="deckStyle" style={{ border: "none" }}>
         <hr></hr>
         <Card.Body >
            <Card.Title>{post.title}</Card.Title>
         </Card.Body>
         <Card.Footer>
            <small className="text-muted">{postDate}</small>
         </Card.Footer>
         <hr></hr>
      </Card>
   )
}

Post.propTypes = {
   post: PropTypes.object.isRequired
}

export default Post
