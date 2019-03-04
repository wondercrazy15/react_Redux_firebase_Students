import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import CreateUser from './components/users/createUsers';
class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/CreateUser' component={CreateUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
