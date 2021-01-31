import './App.css';
import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';




class App extends Component{


  render(){
    return(
    <div className="App">
       

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </div>
    )}
}

export default App;