import React, { useState, useEffect } from 'react';

const ProfilePics = () => {
    const [image, setImages] = useState([]);
    useEffect(() => {
        const url = 'https://randomuser.me/api/';
        fetch(url)
        .then(res => res.json())
        .then(data => setImages(data.results[0].picture.medium));
    }, []);
    
    return (
        <div style={{marginRight: '20px'}} className="comment-image">
            <img style={{borderRadius: '50%'}} src={image} alt=""/>
        </div>
    );
};

export default ProfilePics;