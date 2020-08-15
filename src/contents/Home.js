import React, { Component } from 'react';
import profilepic from '../img/monkey-picture.jpg';
import Social from '../components/Social';


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic" alt=""></img>
            <h1> I am Yashveer Singh Bika </h1>
            <h3> Builder </h3>
            <h3> OCaml Enthusiast </h3>

            <Social />
            </div>
            )
        }
    }
    
    export default Home
    