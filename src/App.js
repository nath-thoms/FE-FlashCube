import React, { Component } from 'react';
import logo from './images/image.png';
import './App.css';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import Login from './components/login';
import { fire } from './config/Fire'
import Home from './components/home'
import Cube from './components/cube'

class App extends Component {

  state = {

    user: {}

  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <div className="App">



        <BrowserRouter>
          <div>



            <div className="App-intro">
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={(props) => <Home {...props} user={this.state.user}/>}/>
            <Route exact path="/cube" component={(props) => <Cube {...props} user={this.state.user}/>}/>
            </div>
          </div>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
