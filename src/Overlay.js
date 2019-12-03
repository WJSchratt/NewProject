import React, { Component } from 'react';
import "./Overlay.css";
import Fade from 'react-reveal/Fade';
import Project1 from "./pics/Screen Shot 2019-11-18 at 3.08.40 PM.png";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Project2 from "./pics/Screen Shot 2019-11-18 at 3.09.32 PM.png"
import Project3 from "./pics/Screen Shot 2019-11-18 at 3.10.53 PM.png"
import Project4 from "./pics/Screen Shot 2019-11-19 at 1.59.56 PM 2.png"
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}




export default class Test extends Component {

  constructor(props) {
      super(props);
      this.state = {
          show7: false,
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
      this.handleResize = this.handleResize.bind(this);
  }

componentDidMount() {
      document.addEventListener("click", this.closeNav);
      this.typeWriter();
      window.addEventListener('resize', this.handleResize);
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
      1300
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
      4300
  ))
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show4: true,})
  }
      .bind(this),
      5300
  )) ;
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show5: true,})
  }
      .bind(this),
      6300
  )) ;
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show5: true,})
  }
      .bind(this),
      7300
  )) ;
this.timer.push(
  setTimeout(
      function() {
      this.setState({ show6: true,})
  }
      .bind(this),
      7300
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
    9300
  ));

this.timer.push(
  setTimeout(
        function() {
        this.setState({ show:false,
                        show6:false,})
}
.bind(this),
13300

));
this.timer.push(
setTimeout(
        function() {
        this.setState({ show:false,
                        show6:false,
                        show7:true,})
}
.bind(this),
14300
));
  }

openNav() {
    const style = { height : " 100%",};
    this.setState({ style });
    document.addEventListener("click", this.closeNav);
    this.setState({ show7: true,})


  }

reveal(){
  this.setState({ show: true});
}


closeNav() {
    document.removeEventListener("click", this.closeNav);
    const style = { height : 0, };
    this.setState({ style,
                    show:false,
                    show1:false,
                    show2:false,
                    show3:false,
                    show4:false,
                    show5:false,
                    show6:false,
                    show7:false,
                    });

this.timer.forEach(element => clearTimeout(element));
}

handleResize = (event) => {
  this.setState({ width: window.innerWidth })
  if (this.state.width > 800){
  }

  }




  render() {
      return (
        <div>
        <Desktop>
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
                  <Container>
                  <Row>
                      <Col>
                        <Fade top opposite collapse when={this.state.show}>
                          <p className="white">Hello My Name is Walter Schratt</p>
                        </Fade>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Fade top opposite collapse when={this.state.show1}>
                          <p className="white">I am a </p>
                        </Fade>
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                      <Fade top opposite collapse when={this.state.show2}>
                        <p className="white">Web-Developer</p>
                      </Fade>
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Fade top opposite collapse when={this.state.show3}>
                          <p className="white">Front-End Engineer</p>
                        </Fade>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Fade top opposite collapse when={this.state.show4}>
                          <p className="white">Ux designer</p>
                        </Fade>
                      </Col>
                    </Row>
                      <Col>
                        <Fade top opposite collapse when={this.state.show5}>
                          <p className="white">React.js specialist</p>
                        </Fade>
                      </Col>
                      <Col>
                        <Fade top opposite collapse when={this.state.show6}>
                          <p className="white">Someone who loves to code</p>
                        </Fade>
                      </Col>
                    <div className="proj">
                        <Fade bottom opposite collapse when={this.state.show7}>
                            <h1 className="center">Projects</h1>
                        </Fade>
                    <Row>
                      <Col>
                        <Fade bottom opposite collapse when={this.state.show7}>
                          <a href="https://jams-react.netlify.com/" >
                            <h1>Music Player</h1>
                            <Image alt="an image of a the website jams" className="projects" src={Project1}fluid />
                          </a>
                        </Fade>
                      </Col>
                      <Col>
                        <Fade bottom opposite collapse when={this.state.show7}>
                          <a href="https://chatt-app.netlify.com/" >
                            <h1>Chat-Application
                            </h1>
                            <Image alt="an image of a the website chat-application" className="projects" src={Project2}fluid />
                          </a>
                        </Fade>
                      </Col>
                    </Row>
                    <Row>
                      <Col><Fade bottom opposite collapse when={this.state.show7}>
                            <a href="https://beas-wed.netlify.com/" >
                            <h1>Website</h1>
                            <Image alt="an image of a the website chat-application" className="projects" src={Project3}fluid />
                            </a>
                          </Fade>
                        </Col>
                        <Col><Fade bottom opposite collapse when={this.state.show7}>
                            <a href="https://shirt-demo.netlify.com/" >
                            <h1>Demo for client</h1>
                            <Image className="pic" alt="an image of a the website chat-application" className="projects" src={Project4}fluid />
                            </a>
                          </Fade>
                        </Col>
                      </Row>
                    </div>
                  </Container>
                </div>
              </div>
                <Fade top opposite collapse when={this.state.show}>
                  <a
                      style={{cursor:"pointer"}}
                      className = "closebtn"
                      onClick   = {this.closeNav}
                  >
                      ×
                  </a>
                  </Fade>
                <div className = "list-group">

                  </div>
                </div>
            </div>
            </div>
              <nav class="navbar navbar-expand-lg navbar-light" id="navi">
                <span classname="burger-overlay" style={{fontSize:45,cursor:"pointer"}} onClick={this.openNav}>&#9776;</span>
              </nav>

            </div>
            </Desktop>



            <Tablet>
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
                      <Container>
                      <Row>
                          <Col>
                            <Fade top opposite collapse when={this.state.show}>
                              <p className="white">Hello My Name is Walter Schratt</p>
                            </Fade>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Fade top opposite collapse when={this.state.show1}>
                              <p className="white">I am a </p>
                            </Fade>
                          </Col>
                        </Row>
                        <Row>
                        <Col>
                          <Fade top opposite collapse when={this.state.show2}>
                            <p className="white">Web-Developer</p>
                          </Fade>
                        </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Fade top opposite collapse when={this.state.show3}>
                              <p className="white">Front-End Engineer</p>
                            </Fade>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Fade top opposite collapse when={this.state.show4}>
                              <p className="white">Ux designer</p>
                            </Fade>
                          </Col>
                        </Row>
                          <Col>
                            <Fade top opposite collapse when={this.state.show5}>
                              <p className="white">React.js specialist</p>
                            </Fade>
                          </Col>
                          <Col>
                            <Fade top opposite collapse when={this.state.show6}>
                              <p className="white">Someone who loves to code</p>
                            </Fade>
                          </Col>
                        <div className="proj">
                            <Fade bottom opposite collapse when={this.state.show7}>
                                <h1 className="center">Projects</h1>
                            </Fade>
                        <Row>
                          <Col>
                            <Fade bottom opposite collapse when={this.state.show7}>
                              <a href="https://jams-react.netlify.com/" >
                                <h1>Music Player</h1>
                                
                              </a>
                            </Fade>
                          </Col>
                          <Col>
                            <Fade bottom opposite collapse when={this.state.show7}>
                              <a href="https://chatt-app.netlify.com/" >
                                <h1>Chat-Application
                                </h1>

                              </a>
                            </Fade>
                          </Col>
                        </Row>
                        <Row>
                          <Col><Fade bottom opposite collapse when={this.state.show7}>
                                <a href="https://beas-wed.netlify.com/" >
                                <h1>Website</h1>

                                </a>
                              </Fade>
                            </Col>
                            <Col><Fade bottom opposite collapse when={this.state.show7}>
                                <a href="https://shirt-demo.netlify.com/" >
                                <h1>Demo for client</h1>
                                </a>
                              </Fade>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </div>
                  </div>
                    <Fade top opposite collapse when={this.state.show}>
                      <a
                          style={{cursor:"pointer"}}
                          className = "closebtn"
                          onClick   = {this.closeNav}
                      >
                          ×
                      </a>
                      </Fade>
                    <div className = "list-group">
                      </div>
                    </div>
                </div>
                </div>
                  <nav class="navbar navbar-expand-lg navbar-light" id="navi">
                    <span classname="burger-overlay" style={{fontSize:45,cursor:"pointer"}} onClick={this.openNav}>&#9776;</span>
                  </nav>

                </div>
            </Tablet>



            <Mobile>
            <h1 style={{display:"none"}}>I hope you dont find this in my code, but if you do, just know this was the only way i figured out howto do it</h1>
            </Mobile>
          </div>
        );
    }
}
