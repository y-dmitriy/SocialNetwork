import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://glass-vector.com/static/preview2/stock-vector-kuhonnyy-fartuk-354-12999.jpg' />
            </div>
            <div>
                ava+description
        </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;