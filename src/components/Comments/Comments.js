import React from 'react';
import ProfilePics from '../ProfilePics/ProfilePics';

const Comments = (props) => {
    const {name, body} = props.comment;
    return (
        <>
            <div style={{display:'flex', alignItems: 'center'}} className="commentor">
                <ProfilePics />
                <h3 className="comment-name">Name: {name}</h3>
            </div>
            <h2>Comment: {body}</h2>
        </>
    );
};

export default Comments;