import React from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import picData from '../Data/PicData.json';
import './Comments.css';

const pics = [
    "http://dummyimage.com/225x202.bmp/dddddd/000000",         
    "http://dummyimage.com/176x201.png/5fa2dd/ffffff",
    "http://dummyimage.com/117x235.jpg/ff4444/ffffff",
    "http://dummyimage.com/240x166.bmp/5fa2dd/ffffff",
    "http://dummyimage.com/248x140.jpg/ff4444/ffffff",
    "http://dummyimage.com/230x238.png/dddddd/000000",
    "http://dummyimage.com/207x124.jpg/dddddd/000000",
    "http://dummyimage.com/149x186.png/cc0000/ffffff",
    "http://dummyimage.com/183x163.png/5fa2dd/ffffff",
    "http://dummyimage.com/101x204.bmp/5fa2dd/ffffff"
]

const useStyles = makeStyles({
    root: {
      maxWidth: '645',
    },
    media: {
      minHeight: 600,
    },
  });

const Comments = (props) => {    
    //const commentNumber = Object.keys(props.comment).length;
    //console.log(commentNumber);
    //const demoPic = picData.slice(0, 5);
    //const images = Object.values(picData);    
    //const images = demoPic.slice(0, 5);
    //console.log(images);
    //console.log(data);
    //const images = JSON.parse(picData);
    const img = pics[Math.floor(Math.random() * pics.length)];
    //const images = demoPic.slice(0, 5);
    //console.log(img);
    const {name, body, email} = props.comment;
    const classes = useStyles();
   
    return (
        <Container maxWidth="sm">
            <Box mt={5} ml={5}>
                <Card className={classes.root}>                    
                    <hr />
                    <CardActionArea>                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h5" className="image-name">
                                <div className="image-part">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="name-part">
                                    <span style={{fontSize: '15px'}}> <strong>Name: </strong> {name}</span>
                                </div>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               <strong> Comment: </strong> {body}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" >
                               <Box pt={3}>
                                    <small><strong> Email: </strong> </small>{email}
                               </Box>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <hr/>                                        
                </Card>
            </Box>
        </Container>
    );
};

export default Comments;