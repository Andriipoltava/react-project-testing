import React, {useState} from 'react'
import PostItem from './PostItem';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (posts.length !== 0)
        return (
            <div>
                <h2 style={{textAlign: 'center'}}>{title}</h2>
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition key={post.id} timeout={500} classNames="post">
                            <PostItem remove={remove} numbrer={index + 1} post={post}
                            />
                        </CSSTransition>
                    )}

                </TransitionGroup>


            </div>
        )
    else return (<h2>Not Found</h2>)
}

export default PostList
