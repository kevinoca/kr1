import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

// Structures
import { Dashboard } from "./Dashboard";
import { Sidebar } from './sidebar';

// data
import { Entries } from "./entries";

// views
import Home from "./views/home";

class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      component: <Home />,
      menuOptionSelected: 0
    }
    this.menuOptions = []

    const entries = new Entries()
    const logMapElements = (value, key, map) => {
      const entry = {
        title: key,
        value
      }
      this.menuOptions.push(entry)
    }
    entries.forEach(logMapElements)
    
  }
  
  loadComponent = (component, index) => this.setState({ component, menuOptionSelected: index })

  
  
  //**** Where the magic begins ****/
  render() {
    
    const componentSelected = this.state.component
    const menu = this.menuOptions.map((option, i) => <li className={(this.state.menuOptionSelected === i) ? "option-menu active" : "option-menu"} onClick={() => this.loadComponent(option.value, i)} key={i}>{option.title}</li>)

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a>
        </header> */}
        <Sidebar components={menu} />
        <Dashboard component={componentSelected} />
      </div>
    );
  }
}

export default App;
