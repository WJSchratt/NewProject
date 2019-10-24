import React, { Component } from 'react';
import "./Overlay.css";
import Fade from 'react-reveal/Fade';



export default class Test extends Component {

  constructor(props) {
      super(props);
      this.state = {
          show : false,
          style : {
              height : '100%',
          }
      };
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.closeNav);
      window.addEventListener('scroll', this.listenToScroll);
      this.setState({ show: true });
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.closeNav);
      window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height

  this.setState({
    theposition: scrolled,
  })
  if ((this.state.thepostion:scrolled)){
    console.log('hey');
  }
}

  openNav() {
      const style = { height : " 100%"};
      this.setState({ style });
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.addEventListener("click", this.closeNav);
      this.setState({ show: true });
  }



  closeNav() {
      document.removeEventListener("click", this.closeNav);
      const style = { height : 0 };
      this.setState({ style });
      this.setState({ show: false});




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
                  <Fade bottom opposite when={this.state.show} >
                    <h1>Welcome,</h1>
                    <h2>I am Walter John Schratt</h2>
                    <a href="google.com">Example</a>
                    <a href="wow">Example</a>
                  </Fade>
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
