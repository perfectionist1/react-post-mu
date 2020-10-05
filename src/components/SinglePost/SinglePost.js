import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';


const useStyles = makeStyles({
  root: {
    maxWidth: '645',
  },
  media: {
    minHeight: 600,
  },
});

const SinglePost = () => {
    const {postId} = useParams();
    //console.log(postId);
    const [post, setPost] = useState({});
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setPost(data))
    }, [])
    //console.log(post);
    const {id, title, body} = post;

    const [comments, setComments] = useState([]);
    useEffect( () => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(commentUrl)
        .then( res => res.json())
        .then( data => setComments(data))
    }, []);
    //console.log(comments.length); 
    //const commentNumber = comments.length;
    //const data = picData.slice(0, commentNumber);
    //const newComment = comments.push(...data);
    // const newComment = comments.concat(data);
    // console.log(newComment);
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="md">
                <Box mt={5} ml={5}>
                    
                    <Card className={classes.root}>
                        <CardActionArea>                        
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                <strong>Post-{id} Title: </strong> {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" mt={4}>
                                <strong> Post Description: </strong>{body} {body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <hr/>
                        <Box display="flex" justifyContent="center">
                            <CardActions >
                                <Link to="/home"> 
                                    <Button size="small" color="primary" variant="contained">
                                        Go Back
                                    </Button>
                                </Link>
                            </CardActions>
                        </Box>                    
                    </Card>
                </Box>            
            </Container>
            <Container  maxWidth="sm">
                <Box textAlign="center" bgcolor="success.main" color="background.paper" p={1} mt={5} ml={5}>
                <h2>Comment Section</h2>
                </Box>
            </Container>            
            {
                comments.map( cmt => <Comments comment={cmt} key={cmt.id}> </Comments>)
            }            
        </div>
        
    );
};

export default SinglePost;