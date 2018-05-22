import React, { Component } from 'react';
import '../home.css'

function TopicCard({ topic }) {

    return (

        <li class="collection-item avatar">
            <img src={topic.imageUrl} alt="" class="circle" />

            <p>{topic.title}<br />
                Number of terms: {topic.terms.length}
            </p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>


        </li>

    )
}



export default TopicCard;