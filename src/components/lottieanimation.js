import * as React from 'react'
import Lottie from 'lottie-web'
import animationData from "./animation/animation_1.json"

class ControlledLottie extends React.Component{
    state={isStopped: false, isPaused: false}
    render(){
        const buttonStyle = {
            display: "inline-block",
            margin: "10px auto",
            marginRight: "10px",
            border: "none",
            color: "white",
            backgroundColor: "#000000",
            borderRadius: "2px",
            fontSize: "15px"
          };
      
          const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
        };
    return (
        <div>
          <h1>Controlled Lottie</h1>
          <p>Uses state manipulation to start, stop and pause animations</p>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
          />
          <button
            style={buttonStyle}
            onClick={() => this.setState({ isStopped: true })}
          >
            Stop
          </button>
          <button
            style={buttonStyle}
            onClick={() => this.setState({ isStopped: false, isPaused: false })}
          >
            Play
          </button>
          <button
            style={buttonStyle}
            onClick={() => this.setState({ isPaused: !this.state.isPaused })}
          >
            Pause
          </button>
        </div>
      );
    }
};

export default ControlledLottie

