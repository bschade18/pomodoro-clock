import React from "react";
import "./App.css";

(function() {
  window.accurateInterval = function(fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };
}).call(this);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerLabel: "Session",
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      intervalID: ""
    };
    this.startPause = this.startPause.bind(this);
    this.countdown = this.countdown.bind(this);
    this.reset = this.reset.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.clockUpdater = this.clockUpdater.bind(this);
    this.breakInc = this.breakInc.bind(this);
    this.breakDec = this.breakDec.bind(this);
    this.sessionInc = this.sessionInc.bind(this);
    this.sessionDec = this.sessionDec.bind(this);
    this.defBreakLength = this.defBreakLength.bind(this);
    this.defSessionLength = this.defBreakLength.bind(this);

    this.playBeep = this.playBeep.bind(this);
    this.pauseBeep = this.pauseBeep.bind(this);
  }

  breakInc() {
    if (this.state.breakLength <= 59 && this.state.start == false) {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  breakDec() {
    if (this.state.breakLength >= 2 && this.state.start == false) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }
  sessionInc() {
    if (this.state.sessionLength <= 59 && this.state.start == false) {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timer: this.state.timer + 60
      });
    }
  }
  sessionDec() {
    if (this.state.sessionLength >= 2 && this.state.start == false) {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timer: this.state.timer - 60
      });
    }
  }
  defBreakLength() {
    this.setState({
      breakLength: 5
    });
  }

  defSessionLength() {
    this.setState({
      sessionLength: 25
    });
  }
  startPause() {
    if (this.state.start) {
      this.setState({
        start: false
      });
      this.state.intervalID && this.state.intervalID.cancel();
    } else {
      this.startCountdown();
      this.setState({
        start: true
      });
    }
  }
  clock() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  startCountdown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.countdown();
        this.clockUpdater();
      }, 1000)
    });
  }

  clockUpdater() {
    if (this.state.timer < 0) {
      if (this.state.timerLabel == "Session") {
        this.setState({
          timer: this.state.breakLength * 60,
          timerLabel: "Break"
        });
        this.playBeep();
      } else {
        this.setState({
          timer: this.state.sessionLength * 60,
          timerLabel: "Session"
        });
        this.playBeep();
      }
    }
  }

  countdown() {
    this.setState(prevState => {
      return {
        timer: prevState.timer - 1
      };
    });
  }

  reset() {
    this.pauseBeep();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      start: false,
      timerLabel: "Session"
    });
    this.state.intervalID && this.state.intervalID.cancel();
  }

  playBeep() {
    const beep = document.getElementById("beep");
    beep.play();
  }

  pauseBeep() {
    const beep = document.getElementById("beep");
    beep.pause();
    beep.currentTime = 0;
  }

  render() {
    return (
      <div>
        <br />
        <h1 id="title">Pomodoro Clock</h1>
        <p id="timer-label">{this.state.timerLabel}</p>
        <div id="time-left">{this.clock()}</div>
        <div class="row">
          <div class="col-6">
            <p id="break-label">Break Length</p>
            <p id="break-length">{this.state.breakLength}</p>
            <div class="break-button">
              <p id="break-decrement" onClick={this.breakDec}>
                <i class="fas fa-minus" />
              </p>

              <p id="break-increment" onClick={this.breakInc}>
                <i class="fas fa-plus" />
              </p>
            </div>
          </div>

          <div class="col-6">
            <p id="session-label">Session Length</p>

            <p id="session-length">{this.state.sessionLength}</p>

            <div class="session-button">
              <p id="session-decrement" onClick={this.sessionDec}>
                <i class="fas fa-minus" />
              </p>

              <p id="session-increment" onClick={this.sessionInc}>
                <i class="fas fa-plus" />
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="start-reset-btn">
              <p id="start-stop" onClick={this.startPause}>
                <i class="fa fa-play" /> <i class="fa fa-pause" />
              </p>

              <p id="reset" onClick={this.reset}>
                <i class="fas fa-undo" />
              </p>
            </div>
          </div>
        </div>
        <div>
          <audio id="beep" src="https://goo.gl/65cBl1" />
        </div>
      </div>
    );
  }
}

export default App;
