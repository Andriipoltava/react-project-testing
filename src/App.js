import React, {useEffect, useMemo, useRef, useState} from 'react'
import {PostForm} from './components/PostForm';

import PostList from './components/PostList';
import {MySelect} from './components/UI/select/MySelect';

import './style/App.css'
import PostFilter from "./components/PostFilter";
import {MyInput} from "./components/UI/input/MyInput";
import MyModal from "./components/UI/myModal/myModal";
import {MyButton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import useFetching from "./hooks/useFetching";

export default function App() {
    const [posts, setPosts] = useState([]);

    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts,isPostsLoader,postError]=useFetching(async ()=>{
        const response = await PostService.getAll()
        setPosts(response.data)
    })



    useEffect(() => {
        fetchPosts()
    }, [])


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    // const bodyInputRef = useRef()

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    return (
        <div className='App'>
            <button onClick={fetchPosts}>Get</button>
            <MyButton onClick={() => setModal(true)}>
                Popup
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError?<h1>postError</h1>
                :''}
            {!isPostsLoader ?
                <PostList remove={removePost} posts={sortedAndSearchPosts} title={'Tilel'}/>

                :
              <Loader/>
            }


        </div>
    )

}
