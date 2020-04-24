import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likecount='30'/>
                <Post message="Is's my first post" likecount='25'/>
                {/* <Post />
                <Post />
                <Post />
                <Post /> */}
            </div>
        </div>
    )
}

export default MyPosts;