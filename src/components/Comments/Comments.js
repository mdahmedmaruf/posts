import React from 'react';
import ProfilePics from '../ProfilePics/ProfilePics';
import { Typography } from '@material-ui/core';

const Comments = (props) => {
    const {name, body} = props.comment;
    return (
        <div style={{margin: '20px auto', padding: '20px', backgroundColor: '#fcfcfc', borderRadius: '5px'}}>
            <div style={{display:'flex', alignItems: 'center'}} className="commentor">
                <ProfilePics />
                <Typography variant="h5">Name: {name}</Typography>
            </div>
            <Typography variant="h6">Comments: {body}</Typography>
        </div>
    );
};

export default Comments;