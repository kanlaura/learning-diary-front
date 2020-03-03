import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Post from './Post.js';

export default function Posts() {
    const [post, setPost] = useState({ posts: [] });

    async function fetchData() {
        const result = await axios('/api/');
        setPost({ posts: result.data });
    }

    useEffect(() => {
        fetchData()
    }, []);

    const deletePost = async (id) => {
        console.log('delete post ' + id)
        await axios.delete(`/api/${id}`)
        fetchData()
    }

    return (
        <Fragment>
            <h2>Posts</h2>
            <div>
                {post.posts.map((post, i) => (
                    < Post post={post} key={post.id} deletePost={deletePost}/>
                ))}
            </div>
        </Fragment>
    );
}
