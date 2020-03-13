import React, { useState, useEffect } from 'react';
import Post from './Post.js';
import { Paper } from '@material-ui/core';
import { getPosts, deletePost, editPost } from '../restService';

export default function Posts() {
    const [post, setPost] = useState({ posts: [] });

    async function fetchData() {
        const post = await getPosts();
        setPost({ posts: post.data });
    }

    useEffect(() => {
        fetchData()
    }, []);

    const delPost = async (id) => {
        await deletePost(id)
        fetchData();
    }

    const edPost = async (post) => {
        await editPost(post);
        fetchData();
    }

    return (
        <Paper elevation={3} className="allPosts">
            <h2>Posts</h2>
            <div className="postsBox">
                {post.posts.map((post, i) => (
                    < Post post={post} key={post.id} delPost={delPost} edPost={edPost} />
                ))}
            </div>
        </Paper>
    );
}
