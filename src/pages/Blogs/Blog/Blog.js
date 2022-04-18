import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    const {qus, ans}=blog;
    return (
        <div className='single-blog'>
            <h3>{qus}</h3>
            <p>{ans}</p>
        </div>
    );
};

export default Blog;