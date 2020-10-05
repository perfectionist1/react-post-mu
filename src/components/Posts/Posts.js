import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Box, Container } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import './Posts.css';
import { Link } from 'react-router-dom';


const Posts = (props) => {
    console.log(props);
    const {id, title} = props.post;
    return (
        <Container maxWidth="md">            
                <div className="posts-style">
                    <Box m={1} pr={3} pl={3}>                      
                        <h2><Link to={`/${id}`}> Post ID: {id} </Link> </h2>
                        
                        <p>Post Title: {title}</p>  
                        <hr />
                        <Box pt={5}> 
                            <Button variant="contained" color="primary">
                                Click Here
                            </Button> To read in details
                        </Box>
                    </Box>                   
                </div>                        
        </Container>
        
    );
};

export default Posts;