import React, { Component } from 'react';
import { fire } from '../config/Fire'
import '../home.css'
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver(
    "bolt://localhost",
    neo4j.auth.basic("neo4j", "flashcube")
);
const neoFunc = require('../../seed/UIFunctions')

class Home extends Component {


    logout = () => {
        fire.auth().signOut();
    }




    render() {
        console.log(this.props.user)
        return (

            <div>
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