import './App.css';
import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import List from './List'




class App extends Component{


  render(){
    return(
    <div className="App">
       

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path='/contact/:id' component={List} />
    </div>
    )}
}

export default App;