import React, { Component } from 'react';
import '../home.css'

class TopicCard extends Component {



    render() {
        return (

            <button value={this.props.index} onClick={this.props.handleClick} class="collection-item avatar topic-button">

                <img src={this.props.topic.imageUrl} alt="" class="circle" />

                <p id={`${this.props.index}`}>{this.props.topic.title}<br />
                    Number of terms: {this.props.topic.terms.length}
                </p>
                <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>


            </button>

        )
    }
}



export default TopicCard;