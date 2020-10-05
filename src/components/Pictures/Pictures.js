import React from 'react';

const Pictures = (props) => {
    //console.log(props.picture)
    const {picture} = props.picture;
    // console.log(pic.picture);
    return (
        <img src={picture} alt=""/>
    );
};

export default Pictures;