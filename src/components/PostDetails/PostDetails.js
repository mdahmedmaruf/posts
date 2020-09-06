import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import { Container, Typography } from '@material-ui/core';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, []);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    }, []);

    return (
        <Container>
            <div style={{padding: '20px', marginTop: '40px', backgroundColor: '#f5f5f5', borderRadius: '5px'}}>
                <Typography variant="h4">Post Details of {postId}</Typography>
                <br/>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="h6">{post.body}</Typography>
                <div style={{marginTop: '40px', marginLeft: '40px', padding: '40px', backgroundColor: '#dddddd', borderRadius: '5px'}}>
                    <Typography variant="h5">Comments:({comments.length})</Typography>
                    {
                        comments.map((comment) => <Comments key={comment.id} comment={comment} />)
                    }
                </div>
            </div>
            
        </Container>
    );
};

export default PostDetails;