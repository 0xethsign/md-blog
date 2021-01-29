import axios from "axios"
import {
   CREATE_POST,
   GET_POST,
   GET_POSTS,
   UPDATE_POST,
   DELETE_POST,
   TOGGLE_POSTS_LOADING,
   TOGGLE_POST_LOADING,
   RESET_POST
} from "./types"

import { setErrors, clearErrors } from "./errorActions"

export const createPost = (postData, history) => dispatch => {
   dispatch(togglePostLoading())
   axios
      .post("http://localhost:8000/api/posts/create", postData)
      .then(res => {
         dispatch({
            type: CREATE_POST,
            payload: res.data
         })
         dispatch(togglePostLoading())
         history.push("/blog")
      })
      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostLoading())
      })
}

export const getPostByID = id => dispatch => {
   dispatch(togglePostLoading());
   axios
      .get(`http://localhost:8000/api/posts/post/${id}`)
      .then(res => {
         dispatch({
            type: GET_POST,
            payload: res.data
         })
         dispatch(clearErrors())
         dispatch(togglePostLoading())
      })

      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostLoading())
      })
}

export const getPostsByAuthor = author => dispatch => {
   dispatch(togglePostsLoading());
   axios
      .get(`http://localhost:8000/api/posts/author/${author}`)
      .then(res => {
         dispatch({
            type: GET_POSTS,
            payload: res.data
         })
         dispatch(togglePostsLoading())
      })
      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostsLoading())
      })
}

export const getPosts = () => dispatch => {
   dispatch(togglePostsLoading())
   axios
      .get(`http://localhost:8000/api/posts/`)
      .then(res => {
         dispatch({
            type: GET_POSTS,
            payload: res.data
         });
         dispatch(clearErrors());
         dispatch(togglePostsLoading())
      })
      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostsLoading())
      })
}

export const updatePost = (id, postData, history) => dispatch => {
   dispatch(togglePostLoading())
   axios
      .patch(`http://localhost:8000/api/posts/update/${id}`, postData)
      .then(res => {
         dispatch({
            type: UPDATE_POST,
            payload: res.data
         })
         dispatch(togglePostLoading());
         history.push(`/blog/post/${res.data._id}`)
      })
      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostLoading())
      })
}

export const deletePost = (id, history) => dispatch => {
   dispatch(togglePostLoading())
   axios
      .delete(`http://localhost:8000/api/posts/delete/${id}`)
      .then(res => {
         dispatch({
            type: DELETE_POST,
            payload: id
         })
         dispatch(togglePostLoading())
         history.push("/blog")
      })
      .catch(err => {
         dispatch(setErrors(err.response.data))
         dispatch(togglePostLoading())
      })
}

export const resetPost = () => {
   return {
      type: RESET_POST
   }
}

export const togglePostLoading = () => {
   return {
      type: TOGGLE_POST_LOADING
   }
}

export const togglePostsLoading = () => {
   return {
      type: TOGGLE_POSTS_LOADING
   }
}
