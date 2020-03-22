import axios from 'axios';

const URL = "http://localhost:3000/api/"

export const editPost = async (post) => {
    let editedPost = await axios.put(`${URL}/${post.id}`, post)
    return editedPost;
}

export const addPost = async (post) => {
    let newPost = await axios.post(URL, post)
    return newPost;
}

export const getPosts = async () => {
    let posts = await axios.get(URL)
    return posts;
}

export const deletePost = async (id) => {
    let deleted = await axios.delete(`${URL}/${id}`)
    return deleted;
}