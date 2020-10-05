import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    console.log(post);
    const {id, title, body} = post;
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Box mt={5} ml={5}>
                <Card className={classes.root}>
                    <CardActionArea>                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                               <strong>Post Title: </strong> {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               <strong> Post Description: </strong>{body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link to="/home"> 
                            <Button size="small" color="primary">
                                Go Back
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
        </Container>
        
    );
};

export default SinglePost;