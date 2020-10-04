import React from 'react';

const Posts = (props) => {
    console.log(props);
    const {id, title} = props.post;
    return (
        <div>
            <h2>Post ID: {id}</h2>
            <p>Post Title: {title}</p>
        </div>
    );
};

export default Posts;