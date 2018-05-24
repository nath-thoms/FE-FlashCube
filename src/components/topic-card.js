import React, { Component } from 'react';
import '../home.css'
import * as API from './API'


class TopicCard extends Component {

    state = {

        favourite: false

    }

    userId = this.props.userId;
    topicTitle = this.props.topic.title.replace(/ /g, "%20")

    componentDidMount() {

        if (this.props.topic.relationship.includes('favourite')) {
            this.setState({

                favourite: true
            })
        }

    }

    handleFave = () => {
        API.createFavourite(this.userId, this.topicTitle)
        this.setState({
            favourite: true
        })
    }

    removeFave = () => {
        API.removeFavourite(this.userId, this.topicTitle)
        this.setState({
            favourite: false
        })
    }




    render() {



        return (
            <div className="topic-card">
                <button value={this.props.index} onClick={this.props.handleClick} className="collection-item avatar topic-button">

                    <img src={this.props.topic.imageUrl} alt="" className="circle" />

                    <p id={`${this.props.index}`}>{this.props.topic.title}<br />
                        Number of terms: {this.props.topic.terms.length}
                    </p>
                </button>
                <div id="favvy" className="fav-button">
                    {this.state.favourite ? <button onClick={this.removeFave} href="#!" className="secondary-content fave-star"><i className="material-icons">star</i></button> : <button onClick={this.handleFave} href="#!" className="secondary-content"><i className="material-icons">star_border</i></button>}
                </div>
            </div>

        )
    }
}



export default TopicCard;