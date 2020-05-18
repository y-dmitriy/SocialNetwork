import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 30 },
            { id: 2, message: 'It\'s my first post', likesCount: 25 },
            { id: 3, message: 'Coool', likesCount: 12 },
            { id: 4, message: 'Very cool', likesCount: 56 },
            { id: 5, message: 'Вауууу', likesCount: 17 }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Ivan' },
            { id: 3, name: 'Petr' },
            { id: 4, name: 'Lilya' },
            { id: 5, name: 'Zhenya' },
            { id: 6, name: 'Aleksey' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'I am fine' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
            { id: 6, message: 'Yo' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;