import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data));
  }, []);
    return (
        <>
          {
            posts.map((post) => <Post key={post.id} post={post} />)
          }
        </>
    );
};

export default Home;