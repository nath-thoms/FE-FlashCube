import React, { Component } from 'react';
import logo from './images/image.png';
import './App.css';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import Login from './components/login';
import { fire } from './config/Fire'
import Home from './components/home'
import Cube from './components/cube'
import * as API from './components/API';

class App extends Component {

  state = {

    user: {},

    dbUser: {},

    topics: [],

    chosenTopic: 0

  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user }, () => {
          API.getUserById(user.uid)
            .then(res => {
              this.setState({dbUser: res[0]._fields[0].properties}, () => {
                this.downloadTopicsOnLoad(res)
              })
            })
          });
          //localStorage.setItem('user', user.uid);
        } else {
          this.setState({ user: null });
          //localStorage.removeItem('user')
        }
      })
    }
    
  downloadTopicsOnLoad = (res) => {
    const relatedTopics = res.map((ele) => {
      return {relationship: ele._fields[1], title: ele._fields[2].properties.title, title: ele._fields[2].properties.title, terms: []}
    })
    API.getAllTopics()
      .then(res => {
        res.forEach(nonRelTopic => {
          if (!relatedTopics.find(relTopic => {
            return relTopic.title === nonRelTopic._fields[0].properties.title
          })) relatedTopics.push({relationship: null, title: nonRelTopic._fields[0].properties.title, terms: []})
        })
        API.getAllTerms()
          .then(res => {
            res.forEach(termObj => {
              const topicIndex = relatedTopics.findIndex(topic => {
                return topic.title === termObj._fields[0].properties.belongs_to
              })
              relatedTopics[topicIndex].terms.push({
                term: termObj._fields[0].properties.term,
                definition: termObj._fields[0].properties.definition
              })
            })
            this.setState({topics: relatedTopics})
          })
      })
  }

  updateDbUser = (dbUser) => {
    this.setState({dbUser})
  }

  render() {
    return (
      <div className="App">



        <BrowserRouter>
          <div>



            <div className="App-intro">
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={(props) => <Home {...props} updateDbUser={this.updateDbUser} user={this.state.user} dbUser={this.state.dbUser} topics={this.state.topics}/>}/>
            <Route exact path="/cube" component={(props) => <Cube {...props} user={this.state.user} dbUser={this.state.dbUser} topic={this.state.topics[this.state.chosenTopic]}/>}/>
            </div>
          </div>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
