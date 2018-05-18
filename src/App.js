import React, { Component } from 'react';
import logo from './images/image.png';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'
import Login from './components/login';
import { fire } from './config/Fire'
import Home from './components/home'

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
        //ocalStorage.removeItem('user')
      }
    })
  }

  render() {
    return (
      <div className="App">



        <BrowserRouter>
          <div>



            <p className="App-intro">
              {this.state.user ? (<Link to="/home"><Home user={this.state.user} /></Link>) : (<Login />)}
              {/* <Login /> */}


            </p>
          </div>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
