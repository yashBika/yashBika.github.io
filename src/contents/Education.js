import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="B.S. Computer Science" where="University of Minnesota" from="Sept 2018" to="Present"/>
            </div>
            )
        }
    }
    
export default Education
    