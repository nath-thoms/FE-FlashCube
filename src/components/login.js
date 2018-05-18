import React, { Component } from 'react'
import '../login.css'
import { Link } from 'react-router-dom'
import { fire, facebookProvider } from '../config/Fire'
import Signup from './signup'
import logo from '../images/image.png';



class Login extends Component {

    state = {

        email: '',
        password: '',
        user: null

    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => { })
            .catch((error) => {
                console.log(error);
            })
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                <Signup />
            })
            .catch((error) => {
                console.log(error)
            })

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    authWithFacebook = () => {
        fire.auth().signInWithPopup(facebookProvider)
            .then((result, error) => {
                if (error) {
                    console.log(error)
                } else {
                    this.setState({
                        user: true
                    })
                }
            })
    }


    render() {
        return (

            <div>


                <img className="logo-image" src={logo} />


                <div className="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">email</i>
                                <input value={this.state.email} onChange={this.handleChange} id="icon_prefix" type="email" name="email" class="validate" />
                                <label for="icon_prefix">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">vpn_key</i>
                                <input value={this.state.password} onChange={this.handleChange} id="icon_prefix" type="password" name="password" class="validate" />
                                <label for="icon_prefix">Password</label>
                            </div>
                        </div>

                        <button onClick={this.login} class="btn waves-effect waves-light" type="submit" name="action">Login
                                <i class="material-icons right">send</i>
                        </button>

                        <button onClick={this.signup} class="btn waves-effect waves-light" type="submit" name="action">Signup
                                <i class="material-icons right">send</i>
                        </button>
                    </form>
                </div>

                <button className="loginBtn loginBtn--facebook" onClick={() => { this.authWithFacebook() }}>Log In with Facebook</button>






            </div>



        )
    }


}


export default Login;