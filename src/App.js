import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CameraView from './CameraView/CameraView'

class App extends Component {
  state = {
    lastResponse: {},
    isLoading: false
  }
  
  renderCameraView() {
    const { lastResponse, isLoading } = this.state;
    const { displayName } = lastResponse;
    return (
      <React.Fragment>
        <div className="App-content">
        <CameraView
          isLoading={isLoading}
          onClear={this.clearState}
          onPhoto={this.submitData}/>
        </div>
      </React.Fragment>
    )
  }
  render() {
    return (
      <div className="App">
      {this.renderCameraView()}
      </div>
    );
  }
}

export default App;
