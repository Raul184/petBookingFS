import React from 'react';
import './App.scss';
import { Switch , Route } from 'react-router-dom';
//comps.
import Nav from './components/layout/Nav'
import Landing from './components/layout/Landing'
import Dashboard from './components/layout/Dashboard';
import User from './components/layout/User';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//store
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/dashboard/:id" render={() => <User />} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
