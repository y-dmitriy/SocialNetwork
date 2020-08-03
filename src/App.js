import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route to path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
        <Route to path='/dialogs' render={() => <Dialogs store={props.store} />} />
        <Route to path='/news' render={() => <News />} />
        <Route to path='/music' render={() => <Music />} />
        <Route to path='/settings' render={() => <Settings />} />
      </div>
    </div>
  )
}

export default App;
