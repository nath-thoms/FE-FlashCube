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

    // addFavourite = () => {
    //     return Axios
    //         .put(`https://flashcube-back-end.herokuapp.com/api/topics/${this.props.userId}/${this.searchTerm}`)
    //         .then(res => {
    //             console.log(res)
    //             return Axios
    //                 .put(`https://flashcube-back-end.herokuapp.com/api/topics/fave/${this.props.userId}/${this.searchTerm}`)
    //                 .then(res => {
    //                     console.log(res)
    //                 })
    //         })
    //         .catch(console.log)
    // }



    handleFave = () => {
        API.createFavourite(this.userId, this.topicTitle)
        this.setState({
            favourite: true
        })
    }

    removeFave = () => {
        console.log('remove')
        API.removeFavourite(this.userId, this.topicTitle)
        this.setState({
            favourite: false
        })
    }




    render() {



        return (
            <div className="topic-card">
                <button value={this.props.index} onClick={this.props.handleClick} class="collection-item avatar topic-button">

                    <img src={this.props.topic.imageUrl} alt="" class="circle" />

                    <p id={`${this.props.index}`}>{this.props.topic.title}<br />
                        Number of terms: {this.props.topic.terms.length}
                    </p>




                    {/* {this.state.favourite ? <button onClick={this.favouriteClick} href="#!" class="secondary-content"><i class="material-icons">star</i></button> : <button onClick={this.favouriteClick} href="#!" class="secondary-content"><i class="material-icons">star_border</i></button>} */}

                    {/* {this.props.favourite && <a href="#!" class="secondary-content"><i class="material-icons">star</i></a>} */}
                    {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}


                </button>
                <div id="favvy" className="fav-button">
                    {this.state.favourite ? <button onClick={this.removeFave} href="#!" className="secondary-content fave-star"><i class="material-icons">star</i></button> : <button onClick={this.handleFave} href="#!" class="secondary-content"><i class="material-icons">star_border</i></button>}
                </div>
            </div>

        )
    }
}



export default TopicCard;