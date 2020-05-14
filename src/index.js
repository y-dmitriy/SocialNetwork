import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 30 },
  { id: 2, message: 'It\'s my first post', likesCount: 25 },
  { id: 3, message: 'Coool', likesCount: 12 },
  { id: 4, message: 'Very cool', likesCount: 56 },
  { id: 5, message: 'Вауууу', likesCount: 17 }
]

let dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Ivan' },
  { id: 3, name: 'Petr' },
  { id: 4, name: 'Lilya' },
  { id: 5, name: 'Zhenya' },
  { id: 6, name: 'Aleksey' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'I am fine' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
  { id: 6, message: 'Yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
