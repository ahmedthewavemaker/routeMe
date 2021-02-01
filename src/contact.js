import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import List from './List';


function Contact(props) {

    return (
        <div>
            <h1>Contact</h1>
            <ul className="List">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Contact</li>
                <li><Link to='/contact/:id'>List</Link></li>
                
            </ul>
            <button onClick={e => props.history.push("/")}>Home</button>
        </div>
    )

}

export default Contact;