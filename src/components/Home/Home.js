import { Container, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then( res => res.json())
        .then( data => setPosts(data))
    }, []);
    return (
        <div>
            <Header></Header>
            <Container maxWidth="md">
                <Box textAlign="center">
                    <h2 ml={4}>All Post: {posts.length}</h2>
                </Box>
                <div>                
                    {
                        posts.map( pst => <Posts post={pst}></Posts> )
                    }
                </div>
            </Container>
        </div>
        
  
    );
};

export default Home;