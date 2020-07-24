import React, { Component } from 'react';
import './App.css';
import NavBar from './components/containers/NavBar.js';
import Home from './components/containers/Home.js'

class App extends Component {
  state = {
    activeTab: "home"
  }

  setActiveTab = (tabClicked) => {
    this.setState({ activeTab: tabClicked })
  }

  activePage = () => {
    switch(this.state.activeTab) {
      case "home":
        return <Home activeTab={this.state.activeTab}/>
      case "projects":
        return <></>
      case "resume":
        return <></>
      case "about":
        return <></>
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <NavBar setActiveTab={this.setActiveTab} />
        </header>
        <div className="test-content">
          {this.state.activeTab}
          {this.activePage()}
        </div>
      </div>
    );
  }
}

export default App;
