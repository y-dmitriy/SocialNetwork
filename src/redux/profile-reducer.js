const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 30 },
        { id: 2, message: 'It\'s my first post', likesCount: 25 },
        { id: 3, message: 'Coool', likesCount: 12 },
        { id: 4, message: 'Very cool', likesCount: 56 },
        { id: 5, message: 'Вауууу', likesCount: 17 }
    ],
    newPostText: 'А так?'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
//Можно сократить синтаксис до вида (без return), поскольку возвращается только одно значение!!!!
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;