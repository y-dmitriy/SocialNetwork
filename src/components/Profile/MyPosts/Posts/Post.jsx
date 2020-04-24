import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://thumbs.dreamstime.com/b/%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D0%BE%D0%B5-%D0%B2%D0%BE%D0%BF%D0%BB%D0%BE%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-107469685.jpg' />
                {props.message}
            <div>
                <span>like {props.likecount}</span>
            </div>
        </div>
    )
}

export default Post;