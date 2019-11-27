import React, { Component } from 'react';
import "./PageOne.js"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import $ from 'jquery';
import Nav from 'react-bootstrap/Nav'
import Git from "./pics/github-logo.png"
import Image from 'react-bootstrap/Image'
import Mail from "./pics/e-mail.png"
import LinkIn from "./pics/linkedin-sign.png"
import { useMediaQuery } from 'react-responsive'
import Project2 from "./pics/Screen Shot 2019-11-18 at 3.09.32 PM.png"
import Project3 from "./pics/Screen Shot 2019-11-18 at 3.10.53 PM.png"
import Project1 from "./pics/Screen Shot 2019-11-18 at 3.08.40 PM.png";
import Project4 from "./pics/Screen Shot 2019-11-19 at 1.59.56 PM 2.png"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1400 })
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

export default class PageOne extends Component {
  constructor(props) {
      super(props);
      this.state = {
      windowWith: window.innerWidth,
      device: "Desktop",
      position: window.scrollY,
      show: false,
    }


  }

    handleResize = (event) => {
      this.setState({ windowWith: window.innerWidth })
      if (this.state.windowWith < 800) {
        this.setState({device:"phone"})

      }
      else if(this.state.windowWith < 1200) {
        this.setState({device:"Computer"})
      }

      else{
        this.setState({device:"Desktop"})
      }
    }

    handlePosition = (event) => {
    this.setState({ position: window.scrollY });
    if (this.state.position > 100){
      $(".swing").slideDown("slow")
      setTimeout(
            function() {
              $("#black").slideDown("slow")
              $(".cute").slideDown("slow")
            }
            .bind(this),
            800
        )
    }

  }

    componentDidMount() {
      this.setState ({position:window.scrollY})
      window.addEventListener('scroll', this.handlePosition);
      window.addEventListener('resize', this.handleResize);
      document.addEventListener('click', this.fade);
    }

    componentDidUnmount() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handlePostion)
    }

    fade = () => {
      var slideSource = document.getElementById('slideSource');
      this.timer = [];
      document.removeEventListener('click', this.fade);
        this.timer.push(
        setTimeout(
              function() {
                $(".cute").slideDown("fast")
                console.log("hey")
              }
              .bind(this),
              1000
          ))

    }


  render() {
      return (
        <div id="wrapper1">
        <Desktop>
        <div className="page1">
        <Nav defaultActiveKey="/home" id="nav" className="flex-column">
          <Nav.Link href="https://github.com/WJSchratt"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
          <Nav.Link href="mailto:john.schratt1@gmail.com" eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/walter-schratt/" eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
        </Nav>
        <Container>
        <div style={{fontSize:"7rem"}}id="test">
            W.J.SCHRATT
          <Row>
            <h2 className="device">Welcome {this.state.device} user your View-Width is <span style={{color:"#212529"}}>{this.state.windowWith}</span></h2>
          </Row>
          <Row>
            <Col><h4 style={{fontSize:"4rem"}} className="cute">I create Responsive Accessible Code</h4></Col>
            <p className="swing" style={{fontSize:"3rem",
                                        color:"white", }}>JavaScript, React, Html, Css, and Java are my game</p>
          </Row>
          <Row>
          <p id="black" style={{fontSize:"2rem",
                                color:"#212529"}}>To view my projects click on the toggle menu on the top left</p>
          </Row>
          <Row>
          {this.state.position}
          </Row>
          </div>
        </Container>
          </div>
        </Desktop>
        <Tablet>
          <div className="page1">
          <Nav defaultActiveKey="/home" id="nav" className="flex-column">
            <Nav.Link href="https://github.com/WJSchratt"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
            <Nav.Link href="mailto:john.schratt1@gmail.com" eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/walter-schratt/" eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
          </Nav>
          <Container>
          <div style={{ position:"absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize:"2rem",
                        textalign:"center",
                         }}>
            <h3 className="center" style={{textalign:"center",
                                           fontSize:"8rem",
                                                            }}>
            WJSchratt
            </h3>
            <Row>
              <h2 style={{ color:"white",
                           fontSize:"1.5rem",}} >Welcome {this.state.device} user your View-Width is <span style={{color:"#212529"}}>{this.state.windowWith}</span></h2>
            </Row>
            <Row>
              <Col><h4 style={{ fontSize:"3.5rem",}}className="swing">I Create Responsive Accessible Code</h4></Col>
              <p className="swing" style={{ fontSize:"4rem",
                                            color:"white",
                                            display:"none"}}>JavaScript, React, Html, Css, and Java are my game</p>
            </Row>
            <Row>
            <p id="black" style={{ fontSize:"2rem",}}>To view my projects click on the toggle menu on the top left</p>
            </Row>
            <Row>
            {this.state.position}
            </Row>
            </div>
        </Container>
          </div>
        </Tablet>
        <Mobile>
        <div className="page1">
        <Nav defaultActiveKey="/home" id="nav" className="flex-column">
          <Nav.Link href="https://github.com/WJSchratt"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
          <Nav.Link href="mailto:john.schratt1@gmail.com" eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/walter-schratt/" eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
        </Nav>
        <Container>
        <div style={{ position:"absolute",
                      top: "20%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize:"2rem",
                      textalign:"center",
                       }}>
          <h3 className="center" style={{textalign:"center",
                                         fontSize:"2rem",
                                                          }}>
          WJSchratt
          </h3>
          <Row>
            <h2 className="cute"style={{ color:"white",
                          fontSize:"1.2rem",}} >Welcome {this.state.device} user your View-Width is <span style={{color:"#212529"}}>{this.state.windowWith}</span></h2>
          </Row>
          <Row>
            <Col><h4 style={{ fontSize:"1.4rem",
                              textalign:"center !important"}}>I Create Responsive Accessible Code</h4></Col>
            <p className="swing" style={{ fontSize:"1rem",
                                textalign:"center !important"}}>JavaScript, React, Html, Css, and Java are my game</p>
          </Row>

          <Row>
          {this.state.position}
          </Row>
          </div>
          </Container>
          </div>
        </Mobile>

        </div>


      )}
}
