import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 30 },
        { id: 2, message: 'It\'s my first post', likesCount: 25 },
        { id: 3, message: 'Coool', likesCount: 12 },
        { id: 4, message: 'Very cool', likesCount: 56 },
        { id: 5, message: 'Вауууу', likesCount: 17 }
    ]

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;