import React, { Component } from 'react';
import './App.css';

import CameraView from './CameraView/CameraView'
import ResultFooter from './ResultFooter/ResultFooter'

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

class App extends Component {
  state = {
    lastResponse: {},
    isLoading: false
  }

  submitData = (data) => {
    this.setState({isLoading: true})
    const blop = dataURLtoBlob(data);
    const imageData = {
      uri: data,
      type: 'image/png',
      name: 'image.png',
    }
    let formData = new FormData();
    formData.append('image', blop);

    fetch('/faces', {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      this.setState({lastResponse: responseData, isLoading: false})
    })
    .catch(err => {
      this.setState({isLoading: false})
      throw Error(err);
    })
  }
  
  renderCameraView() {
    const { lastResponse, isLoading } = this.state;
    const { headwearLikelihood } = lastResponse;

    const onPhoto = res => {
      this.setState({
        lastResponse: res[0]
      })
    }

    return (
      <React.Fragment>
        <div className="App-content">
        <CameraView
          isLoading={isLoading}
          onClear={() => this.setState({ lastResponse: {} })}
          onPhoto={onPhoto}/>
        </div>
        {headwearLikelihood && (
          <ResultFooter
            onShowDetails={this.showDetails}
            label={headwearLikelihood}/>
        )}
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
