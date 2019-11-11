import React from 'react';

import './CameraView.css';
import ShutterButton from '../common/ShutterButton';
import Webcam from 'react-webcam'

const postScreenshot = async (img, api) => {
  console.log('posting')
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({ image: img }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
  return response;
};


class CameraView extends React.Component {

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();

    this.state = {
      streamSource: null,
      photoTaken: false,
    }
  }

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(this.createVideoSource)
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }

  render() {
    const { photoTaken } = this.state;
    const { isLoading } = this.props;
    
    const capture = onFetch => () => {
      const img = webcamRef.current.getScreenshot();
      onFetch(img);
    };

    
    const videoConstraints = {
      facingMode: "user",
      width: 512,
      height: 512
    };
    const webcamRef = React.createRef();
    
    const updateFaces = async img => {
      const response = await postScreenshot(img, "/faces");
      console.log(response.faces);
    };

    const shutterBtn = isLoading
      ? <ShutterButton onClick={() => {}} icon="spinner fa-spin" /> 
      : <ShutterButton onClick={() => {
        capture(updateFaces)()
      }} icon="camera" /> 

    return (
      <div className="CameraView">
        <div className="CameraView-viewfinder">
          <Webcam
            audio={false}
            videoConstraints={videoConstraints}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />          
        </div>
        <div className="CameraView-footer">
          {shutterBtn}
        </div>
      </div>
    );
  }
};

export default CameraView;
