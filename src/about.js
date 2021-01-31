import React from 'react';
import {Link} from 'react-router-dom';


function About(props) {

    return (
        <div>
            <h1>About</h1>
            <ul className="List">
                <li><Link to='/'>Home</Link></li>
                <li>About</li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <button onClick={e=> props.history.push("/")}>Home</button>
        </div>
    )

}

export default About;