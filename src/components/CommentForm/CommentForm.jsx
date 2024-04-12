import { Box, Container } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Hero from '../Hero/Hero';
import { useState } from 'react';
import { CommentsAPI } from '../../api/comments-api';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/comments/comments-slice';
import { useNavigate } from 'react-router-dom';

export default function CommentForm() {
    const dispatch = useDispatch();
    const navigate =useNavigate()

    //handle the input change
    const [formValues,setFormValues]= useState({
        name:"",
        comment:""
    })

    function handleChange(e){
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    console.log(formValues);
    // end of handle the input change

    //post comment on the store

    async function postComment(){
        const newComment = await CommentsAPI.create({
            ...formValues,
            created_at: new Date().toLocaleDateString(),
        });
        dispatch(addComment(newComment));
        alert("Comment succesfully added ✅")
        navigate("/");
    };


  return (
    <Box>
    <Container sx={{ 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"60vh"
     }}>
     <Box sx={{ 
        width:"80%"
      }}>
    <Form onSubmit={postComment}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        name='name'
        placeholder="Enter your name please" 
        onChange={handleChange} 
        value={formValues.username}   
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control 
        as="textarea"
        name='comment'
        rows={3} 
        placeholder="Write your comment just here" 
        onChange={handleChange}  
        value={formValues.comment}   
        />
      </Form.Group>      
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
    </Box>
    </Container>
    </Box>
  );
}

