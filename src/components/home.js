import React, { Component } from 'react';
import { fire } from '../config/Fire'
import '../home.css'


class Home extends Component {


    logout = () => {
        fire.auth().signOut();
    }




    render() {
        console.log(this.props.user)
        return (

            <div className="container">
                Hello

                <div className="profile-pic">

                    <img src={this.props.user.photoURL} />

                </div>

                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;