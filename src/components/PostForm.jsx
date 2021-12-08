import React, { useState } from 'react'
import { MyButton } from './UI/button/MyButton';
import { MyInput } from './UI/input/MyInput';

export const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' })
 


    const addNewPost = (e) => {
        e.preventDefault()
        // setPosts([...posts, { ...post, id: Date.now() }])
        const newPost = { ...post, id: Date.now() }
        create(newPost)
        setPost({ title: '', body: '' })
        // console.log(bodyInputRef.current.value)
    }


    return (
        <form >

            <MyInput type="text" placeholder='Nama Post' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
            {/* <input ref={bodyInputRef} type="text" placeholder='description post' /> */}
            {/* <MyInput ref={bodyInputRef} type="text" placeholder='description post' /> */}

            <MyInput type="text" placeholder='Body Post' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} />

            <MyButton onClick={addNewPost} disabled={false} >Create Post</MyButton>
        </form>
    )
}
