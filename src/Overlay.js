import React, { Component } from 'react';
import "./Overlay.css";
import Fade from 'react-reveal/Fade';



export default class Test extends Component {

  constructor(props) {
      super(props);
      this.state = {
          show6: false,
          show5: false,
          show4: false,
          show3: false,
          show2: false,
          show : false,
          show1: false,
          closeNav:false,
          style : {
              height : '100%',
          },
      };
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
      this.typeWriter = this.typeWriter.bind(this);
      this.reveal = this.reveal.bind(this);
  }

componentDidMount() {
      document.addEventListener("click", this.closeNav);
      this.typeWriter();
}

componentWillUnmount() {
      document.removeEventListener("click", this.closeNav);

  }


typeWriter () {
this.timer = [];
this.timer.push(
setTimeout(
      function() {
      this.setState({ show: true})
  }
      .bind(this),
      1200
  ))
this.timer.push(
setTimeout(
      function() {
        this.setState({ show1: true,
                        show2: true})
  }
  .bind(this),
  3300
));
this.timer.push(
  setTimeout(
      function() {
      this.setState({show3: true})
  }
      .bind(this),
      5000
  ))
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show4: true,})
  }
      .bind(this),
      6000
  )) ;
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show5: true,})
  }
      .bind(this),
      7000
  )) ;
  this.timer.push(
  setTimeout(
      function() {
      this.setState({ show5: true,})
  }
      .bind(this),
      8000
  )) ;
  this.timer.push(
  setTimeout(
      function() {
      this.setState({ show6: true,})
  }
      .bind(this),
      9000
  )) ;
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show1: false,
                      show2: false,
                      show3: false,
                      show4: false,
                      show5: false,})
  }
      .bind(this),
      12000
  ));
  }

openNav() {
    const style = { height : " 100%",};
    this.setState({ style });
    document.addEventListener("click", this.closeNav);
    this.setState({ show1: false,
                    show: false, })


  }

reveal(){
  this.setState({ show: true});
}


closeNav() {
    document.removeEventListener("click", this.closeNav);
    const style = { height : 0, };
    this.setState({ style,
                    show:false,
                    show6:false,
                    closeNav: !this.state.closeNav,});
    this.timer.forEach(element => clearTimeout(element))
}



  render() {
      return (
        <div id='wrapper'>
        <div>
          <div
              ref       = "snav"
              className = "overlay"
              style     = {this.state.style}
          >
              <div className = "sidenav-container">
                <div className = "overlay-content">
                  <div className = "text-center">
                  <div>
                      <Fade top opposite collapse when={this.state.show}>
                        <p>Hello My Name is Walter Schratt</p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show1}>
                        <p>I am a </p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show2}>
                        <p>Web-Developer</p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show3}>
                        <p>Front-End Engineer</p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show4}>
                        <p>Ux designer</p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show5}>
                        <p>React.js specialist</p>
                      </Fade>
                      <Fade top opposite collapse when={this.state.show6}>
                        <p>A guy who likes to code</p>
                      </Fade>
                    </div>
                  </div>
                </div>
                  <a
                      style={{cursor:"pointer"}}
                      className = "closebtn"
                      onClick   = {this.closeNav}
                  >
                      ×
                  </a>
                <div className = "list-group">

                  </div>
                </div>
            </div>
            </div>
              <nav class="navbar navbar-expand-lg navbar-light" id="navi">
                <span classname="burger-overlay" style={{fontSize:45,cursor:"pointer"}} onClick={this.openNav}>&#9776;</span>
              </nav>

            </div>
        );
    }
}
