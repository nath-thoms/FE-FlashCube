import React, { Component } from 'react';
import { fire } from '../config/Fire'
import '../home.css'
import Loading from './loading'
// import Title from './title'; This is commented out below, meaning it is not used so not necessary to import in
// import MainButton from './main-button'; This is never used.
// import { Link } from 'react-router-dom';
// import * as API from './API';
import logoText from '../images/flash-text.png';
import TopicCard from './topic-card';


class Home extends Component {

    // componentDidMount() { RG - why is this here if it is empty?

    // }

    logout = () => {
        fire.auth().signOut();
        this.props.history.push('/')
    }

    cubeStart = () => {
        this.props.history.push('/cube')
    }



    render() {
        return (

            <div className="container">
                {!this.props.user
                    ? <Loading />
                    : <div>
                        {/* <Title />
                        <div className="control-panel">
                            <Link to="/cube">Enter the FlashCube</Link>
                            <MainButton />
                            <MainButton />
                            <p>Welcome {this.props.user.displayName || "User"}</p>
                            <MainButton />
                            <MainButton />
                            <p>{this.props.user.uid}</p>
                            <p>{JSON.stringify(this.props.dbUser)}</p>
                            <p>{JSON.stringify(this.props.topics)}</p>
                            
                        </div>
                        <div className="profile-pic">
                        
                            <img alt="" src={this.props.user.photoURL} />
                        </div>
                        <button onClick={this.logout}>Logout</button> */}

                        <img alt="" className="logo-image" src={logoText} />
                        <div className="profile-pic">
                            <img alt="" src={this.props.user.photoURL} />
                        </div>
                        <p>Welcome {this.props.user.displayName || "User"}</p>

                        <button onClick={this.logout}>Logout</button>

                        <div className="container button-bar">
                            <div onClick={this.cubeStart} className="waves-effect waves-light btn-large">  Start  </div>
                            <a className="waves-effect waves-light btn-large"><i className="large material-icons">settings</i></a>
                            <div className="waves-effect waves-light btn-large">Trophies</div>

                        </div>

                        <div className="filters">


                            <a className="waves-effect waves-light btn">Filter</a>
                            <a className="waves-effect waves-light btn">Sort</a>



                        </div>
                        <div className="scroll-box">
                            <h2>Topics</h2>

                            <div className="topic-list">

                                <ul className="collection">

                                    {this.props.topics.map((topic, index) => <TopicCard handleClick={this.props.handleClick} topic={topic} index={index} currentTopic={this.props.currentTopic} favourite={false} userId={this.props.dbUser.uid} />)}


                                </ul>

                            </div>

                        </div>



                    </div>}


            </div>
        )
    }
}

export default Home;