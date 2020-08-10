import profileReducer from "./profile-reducer";
import dialogsReducer from "./dislogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 30 },
                { id: 2, message: 'It\'s my first post', likesCount: 25 },
                { id: 3, message: 'Coool', likesCount: 12 },
                { id: 4, message: 'Very cool', likesCount: 56 },
                { id: 5, message: 'Вауууу', likesCount: 17 }
            ],
            newPostText: 'А так?'
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
            ],
            newMessageBody: ''
        },
        sidebar: {

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;