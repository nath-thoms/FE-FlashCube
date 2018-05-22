import React from 'react';
import PT from 'prop-types';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import FlashCard from './flash-card';
import ExitCard from './exit-card';
import RefreshCard from './refresh-card';

class Cube extends React.Component {

    state = {
        iteration: 0
    }

    exitCube = () => {
        this.props.history.push('/home')
    }

    render () {
        const posArr = [
            {x: -1.5, y: 1.5, z: 2.02}, {x: 0, y: 1.5, z: 2.02}, {x: 1.5, y: 1.5, z: 2.02},
            {x: -1.5, y: 0, z: 2.02}, {x: 1.5, y: 0, z: 2.02},
            {x: -1.5, y: -1.5, z: 2.02}, {x: 0, y: -1.5, z: 2.02}, {x: 1.5, y: -1.5, z: 2.02},
        ]
        const {topic} = this.props
        return (
            <Scene>
                <a-assets>
                    <img id="logo" src="flashcubelogo.png"/>
                    <img id="metal" src="metal.jpg"/>
                    <img id="rawbeef" src="rawbeef.jpg"/>
                    <img id="cardboard" src="cardboard.jpg"/>
                    <img id="cubecursor" src="cubecursor.png"/>
                    <img id="sean" src="sean.jpeg"/>
                    <img id="romy" src="romy.jpeg"/>
                    <img id="nath" src="nath.jpeg"/>
                    <img id="dan" src="dan.jpg"/>
                    <img id="paper" src="paper.jpg"/>
                </a-assets>
                <a-entity camera look-controls>
                    <Entity cursor="fuse: true; fuseTimeout: 1"
                        geometry={{primitive: 'ring', "radiusInner": 0.001, 'radiusOuter': 0.002}}
                        material={{color: 'black'}}
                        position={{x: 0, y: 0, z: -0.2}}>
                    </Entity>
                </a-entity>
                <Entity
                    geometry={{primitive: 'box', width: 2, height: 2, depth: 2, transparent: false}}
                    material={{src: "#logo", side: 'back'}}
                    position={{x: 0, y: 0, z: 0}}>
                    <a-animation attribute="material.opacity"
                        dur="3000"
                        begin="2000"
                        fill="forwards"
                        from="1"
                        to="0"
                        repeat="0"></a-animation>
                    <a-animation attribute="position"
                        dur="100"
                        begin="5000"
                        fill="forwards"
                        from="0 0 0"
                        to="0 20 0"
                        repeat="0"></a-animation>
                </Entity>
                <Entity
                    geometry={{primitive: 'box', width: 8.2, height: 8.2, depth: 8.2}}
                    material={{src: '#metal', color: 'cyan', side: 'back'}}
                    position={{x: 0, y: 0, z: 0}}
                >
                </Entity>
                <Entity geometry={{primitive: 'plane', width: 6, height: 6}}
                    material={{color: 'yellow', opacity: 0}}
                    position={{x: 0, y: 0, z: -5.08}}
                    text={{value: 'bottom'}}
                >
                    <Entity
                        geometry={{primitive: 'plane', width: 5.8, height: 0.5}}
                        material={{src: '#cardboard'}}
                        position={{x: 0, y: 2.65, z: 2.02}}
                        text={{value: this.props.topic.title, height: 0.2, align: 'center', color: 'black', baseline: 'bottom', wrapCount: '40', font: 'https://cdn.aframe.io/fonts/mozillavr.fnt'}}
                        >
                    </Entity>
                    <Entity
                        geometry={{primitive: 'plane', width: 5.8, height: 0.5}}
                        material={{src: '#cardboard'}}
                        position={{x: 0, y: -2.65, z: 2.02}}
                        text={{value: 'bottom', align: 'center', color: 'black', baseline: 'bottom', wrapCount: '40', font: 'https://cdn.aframe.io/fonts/mozillavr.fnt'}}                        
                        >
                    </Entity>
                    {posArr.map((pos, index) => {
                        return <FlashCard term={topic.terms[index].term} definition={topic.terms[index].definition} img="" pos={pos}/>
                    })}
                    <RefreshCard pos={{x: 0, y: 0, z: 2.02}}/>
                </Entity>
                <Entity geometry={{primitive: 'plane', width: 6, height: 6}}
                    material={{color: 'yellow', opacity: 0}}
                    position={{x: -5.08, y: 0, z: 0}}
                    rotation="0 90 0"
                >
                    <ExitCard exitCube={this.exitCube} pos={{x: 0, y: 0, z: 2.02}}/>
                </Entity>
            </Scene>
        );
    }

    static propTypes = {
        topic: PT.object.isRequired
    }
}

export default Cube;