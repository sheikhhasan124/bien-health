import React, { useState } from 'react';
import './Blogs.css'
import { BlogData } from './BlogData';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs]=useState(BlogData)
    return (
        <div>
            
           <div className="blogs-container">
           {blogs.map(blog=><Blog key={blog.id} blog={blog}/>)}
           </div>
        </div>
    );
};

export default Blogs;