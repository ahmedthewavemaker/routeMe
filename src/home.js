import React from 'react';
import "./App.css";
import {Link} from 'react-router-dom'


function Home() {

    return (
        <div>
            <h1>Hello, world!</h1>
            <ul className="List">
                <li>Home</li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to ='/contact/:id'>List</Link></li>
            </ul>
        </div>
    )

}

export default Home;