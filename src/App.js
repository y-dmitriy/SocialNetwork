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

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route to path='/profile' component={Profile} />
          <Route to path='/profile' component={Profile} />
          <Route to path='/dialogs' component={Dialogs} />
          <Route to path='/news' component={News} />
          <Route to path='/music' component={Music} />
          <Route to path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;
