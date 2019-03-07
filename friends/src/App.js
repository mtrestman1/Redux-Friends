import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/home'>Home Page</Link>
          </li>
          <li>
            <Link to='/friends'>Friends Page</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
      </div>
      </Router>
    );
  }
}

export default App;
