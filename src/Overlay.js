import React, { Component } from 'react';
import "./Overlay.css";
import Fade from 'react-reveal/Fade';



export default class Test extends Component {

  constructor(props) {
      super(props);
      this.state = {
          show : false,
          show1: false,
          style : {
              height : '100%',

          }
      };
      this.openNav = this.openNav.bind(this);
      this.closeNav = this.closeNav.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.reveal = this.reveal.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.closeNav);
      setTimeout(
        function() {
          this.setState({ show: true})
  }
  .bind(this),
  1000
  );

  setTimeout(
    function() {
      this.setState({ show1: true})
}
.bind(this),
4000
);
}

  componentWillUnmount() {
      document.removeEventListener("click", this.closeNav);

  }


  openNav() {
      const style = { height : " 100%",
                      };
      this.setState({ style });
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      document.addEventListener("click", this.closeNav);
      setTimeout(
        function() {

  }
  .bind(this),
  1000
);
  }

reveal(){
  this.setState({ show: true});
}


  closeNav() {
      document.removeEventListener("click", this.closeNav);
      const style = { height : 0,
                       };
      this.setState({ style });
      setTimeout(
        function() {
        this.setState({ show: false})
        this.setState({ show1: false})
  }
  .bind(this),
  0
);}
  handleClick() {
    this.setState({ show: !this.state.show });
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
                      <p>I am a Web-Developer</p>
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
