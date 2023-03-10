import React, {Component} from 'react';
import { BrowserRouter , Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import index from './Components/index'

class App extends Component {
  render() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={index} />
      <Route path='/contact' component={Contact} />
      </BrowserRouter>
    </div>
   )
  }
}

export default App;
