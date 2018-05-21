import React, { Component } from 'react';
import { fire } from '../config/Fire'
import '../home.css'
import Loading from './loading'
import Title from './title';
import MainButton from './main-button'
import { Link } from 'react-router-dom';
import * as API from './API';
import logoText from '../images/flash-text.png';

class Home extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        API.getUserById(this.props.user.uid)
            .then(res => this.setState({ user: res }))
    }

    logout = () => {
        fire.auth().signOut();
        this.props.history.push('/')
    }

    render() {
        console.log(this.props.user)
        return (

            <div className="container">
                {!this.props.user
                    ? <Loading />
                    : <div>

                        <img className="logo-image" src={logoText} />
                        <div className="profile-pic">
                            <img src={this.props.user.photoURL} />
                        </div>
                        <p>Welcome {this.props.user.displayName || "User"}</p>

                        <button onClick={this.logout}>Logout</button>

                        <div className="container button-bar">
                            <div class="waves-effect waves-light btn-large">  Start  </div>
                            <a class="waves-effect waves-light btn-large"><i class="large material-icons">settings</i></a>
                            <div class="waves-effect waves-light btn-large">Trophies</div>

                        </div>

                        <div className="filters">


                            <a class="waves-effect waves-light btn">Filter</a>
                            <a class="waves-effect waves-light btn">Sort</a>



                        </div>
                        <div className="scroll-box">
                            <h2>About Scroll Boxes</h2>
                            <p>This is an example of an HTML scroll box.</p>
                            <p>Scroll boxes allow you to place lots of web content into a small box. You can force the box to have scroll bars so that the user can scroll down (or across) to view all of the content.</p>

                        </div>
                    </div>}









            </div>
        )
    }
}

export default Home;