import React, { Component } from 'react';
import './App.css';
import NavBar from './components/containers/NavBar.js';

class App extends Component {
  state = {
    activeTab: "home"
  }

  setActiveTab = (tabClicked) => {
    this.setState({ activeTab: tabClicked })
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <NavBar setActiveTab={this.setActiveTab} />
        </header>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
        <div className="test-content">
          {this.state.activeTab}
        </div>
      </div>
    );
  }
}

export default App;
