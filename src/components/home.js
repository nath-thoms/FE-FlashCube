import React, { Component } from 'react';
import { fire } from '../config/Fire'
import '../home.css'
import Loading from './loading'
import Title from './title';
import MainButton from './main-button'
import { Link } from 'react-router-dom';
import * as API from './API';

class Home extends Component {

    state = {
        user: null
    }

    componentDidMount () {
        API.getUserById(this.props.user.uid)
            .then(res => this.setState({user: res}))
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
                <Title/>
                <div className="control-panel">
                    <Link to="/cube">Enter the FlashCube</Link>
                    <MainButton />
                    <MainButton />
                    <p>Welcome {this.props.user.displayName || "User"}</p>
                    <MainButton />
                    <MainButton />
                    <p>{this.props.user.uid}</p>
                </div>
                <div className="profile-pic">
                    <img src={this.props.user.photoURL} />
                </div>
                <button onClick={this.logout}>Logout</button>
                </div>}
            </div>
        )
    }
}

export default Home;