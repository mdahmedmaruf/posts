import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

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
        <div>
            <h2>Post Details of {postId}</h2>
            <h3>Title: {post.title}</h3>
            <h4>Details: {post.body}</h4>
            <h3>Images</h3>
            
            <h4>Comments:({comments.length})</h4>
            {
                comments.map((comment) => <Comments key={comment.id} comment={comment} />)
            }
            
        </div>
    );
};

export default PostDetails;