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
  const isDesktop = useMediaQuery({ minWidth: 1200 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1200 })
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

this.handleResize = this.handleResize.bind(this)
  }

    handleResize = (event) => {
      this.setState({ windowWith: window.innerWidth })
      if (this.state.windowWith < 800) {
        this.setState({device:"Mobile"})

      }
      else if(this.state.windowWith < 1500) {
        this.setState({device:"Computer"})
      }

      else{
        this.setState({device:"Desktop"})
      }
    }

    handlePosition = (event) => {
    this.setState({ position: window.scrollY });

    if (this.state.position > 90){
      $(".swing").slideDown("slow")
      $(".cute").slideDown("slow")
      $("#black").slideDown("slow")
      $("#position").slideDown("slow")
      $("#scroll").slideDown("slow")
      setTimeout(
            function() {
              $(".device").slideDown("slow")
            }
            .bind(this),
            500
        )
    }
  }

    componentDidMount() {
      this.setState ({position:window.scrollY})
      window.addEventListener('scroll', this.handlePosition);
      window.addEventListener('resize', this.handleResize);
      document.addEventListener('click', this.fade);
      this.handleResize();

    }

    componentDidUnmount() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handlePostion)
    }

    fade = () => {
      var slideSource = document.getElementById('slideSource');
      document.removeEventListener('click', this.fade);

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
        <Container className="right-postion">
          <h1 className="right-postion" style={{position: "fixed",
                                                right:"1%",
                                                top:"25%",
                                                fontSize:"1.5rem",
                                                textalign:"center"

          }}>
           Scroll position is <span style={{color: "white",}}>{this.state.position}</span>
          </h1>
        </Container>
        <Container>
        <div style={{fontSize:"8rem"}}id="test">
            W.J.SCHRATT
          <Row>
            <Col>
            <h2 style={{textalign:"center"}} className="device">Welcome {this.state.device} User Your Viewwidth is <span style={{color:"#212529",fontSize:"2rem",textalign:"center",}}>{this.state.windowWith}</span></h2>
          </Col>
        </Row>
          <Row className="introduction">
            <Col><h4 style={{fontSize:"4rem"}} className="cute">I create Responsive Accessible Code</h4></Col>
            <Col>
              <p className="swing" style={{fontSize:"3rem",
                                        color:"white",
                                        textalign:"left"}}>JavaScript, React, Html, Css, and Java are my game</p>
            </Col>
          </Row>
          <Row>
            <p id="black" className="centered" style={{fontSize:"1.5rem",
                                color:"#212529",
                                textalign:"center"}}>To view my projects click on the toggle menu on the top left</p>
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
        <Container className="right-postion">
          <h1 className="right-postion" style={{position: "fixed",
                                                right:"2%",
                                                top:"25%",
                                                fontSize:"1.2rem",
                                                textalign:"center"

          }}>
           Scroll position is <span style={{color: "white",}}>{this.state.position}</span>
          </h1>
        </Container>
        <Container>
        <div style={{fontSize:"5rem"}}id="test">
            W.J.SCHRATT
          <Row>
            <Col>
            <h2 style={{textalign:"center", fontSize:"1.5rem"}} className="device">Welcome {this.state.device} User Your Viewwidth is <span  style={{color:"#212529",fontSize:"1.5rem",textalign:"center",}}>{this.state.windowWith}</span></h2>
          </Col>
        </Row>

          <Row className="introduction">
            <Col><h4 style={{fontSize:"2rem"}} className="cute">I create Responsive Accessible Code</h4></Col>
            <Col><p className="swing" style={{fontSize:"1.5rem",
                                        color:"white",
                                        textalign:"left"}}>JavaScript, React, Html, Css, and Java are my game</p></Col>
          </Row>
          <Row>
            <p id="black" className="centered" style={{fontSize:"1.5rem",
                                color:"#212529",
                                textalign:"center"}}>To view my projects click on the toggle menu on the top left</p>
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
        <Container className="right-postion">
          <h1 className="right-postion" style={{position: "fixed",
                                                right:"1%",
                                                top:"25%",
                                                fontSize:"1rem",
                                                textalign:"center"

          }}>
           Scroll position is <span style={{color: "white",}}>{this.state.position}</span>
          </h1>
        </Container>
        <Container>
        <div style={{fontSize:"2rem"}}id="test">
            W.J.SCHRATT
          <Row>
            <Col>
            <h2 style={{textalign:"center", fontSize:"1rem"}} className="device">Welcome {this.state.device} User Your Viewwidth is <span  style={{color:"#212529",fontSize:"1rem",textalign:"center",}}>{this.state.windowWith}</span></h2>
          </Col>
        </Row>
          <Row className="introduction">
            <Col><h4 style={{fontSize:"1.2rem"}} className="cute">I create Responsive Accessible Code</h4></Col>
              <Col><p className="swing" style={{fontSize:"1.1rem",
                                        color:"white",
                                        textalign:"left"}}>JavaScript, React, Html, Css, and Java are my game</p></Col>
          </Row>
          <Row>
            <p id="black" className="centered" style={{
                                fontSize:"1rem",
                                color:"#212529",
                                textalign:"center"}}>To view my projects click on the toggle menu on the top left</p>
          </Row>

          </div>
        </Container>
          </div>
        </Mobile>

        </div>


      )}
}
