import React, { Component } from 'react';
import "./Overlay.css";
import Fade from 'react-reveal/Fade';



export default class Test extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          show : false,
          style : {
              width : '100%',
          }
      };
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.closeNav);
      this.setState({ show: true });
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.closeNav);
  }

  openNav() {
      const style = { width :" 100%"};
      this.setState({ style });
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.addEventListener("click", this.closeNav);
      this.setState({ show: true });
  }



  closeNav() {
      document.removeEventListener("click", this.closeNav);
      const style = { width : 0 };
      this.setState({ style });
      this.setState({ show: false});
      document.body.style.backgroundColor = "#F3F3F3";



  }

  render() {
      return (
        <div id='wrapper'>
        <div>
        <span style={{fontSize:30,cursor:"pointer"}} onClick={this.openNav}>&#9776; open</span>
          <div
              ref       = "snav"
              className = "overlay"
              style     = {this.state.style}
          >
              <div className = "sidenav-container">
                <div className = "overlay-content">
                  <div className = "text-center">
                  <Fade bottom opposite when={this.state.show} >
                    <h1>Welcome,</h1>
                    <h2>I am Walter John Schratt</h2>
                    <a href="google.com">Example</a>
                    <a href="wow">Example</a>
                  </Fade>
                  </div>
                </div>
                  <a

                      className = "closebtn"
                      onClick   = {this.closeNav}
                  >
                      ×
                  </a>
                <div className = "list-group">
                    {/*your form component goes here */}
                    {this.props.children}
                  </div>
                </div>
            </div>
            </div>

            </div>
        );
    }
}
