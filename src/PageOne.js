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
import  { Breakpoint, BreakpointProvider } from 'react-socks';



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
      if (this.state.windowWith < 1100) {
        this.setState({device:"phone"})

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
      window.removeEventListener('scroll', this.handlePostion);
    }

    fade = () => {
      var slideSource = document.getElementById('slideSource');
      this.timer = [];
      document.removeEventListener('click', this.fade);
        this.timer.push(
        setTimeout(
              function() {
                $(".cute").slideDown("fast")
              }
              .bind(this),
              1000
          ))
    }


  render() {
      return (

        <div className="page1">
        <Breakpoint customQuery="(min-width: 1400px">
        <Nav defaultActiveKey="/home" id="nav" className="flex-column">
          <Nav.Link href="/home"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
          <Nav.Link eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
          <Nav.Link eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
        </Nav>
        <Container>
        <div id="test">
          <Row>
            W.J.SCHRATT
          </Row>
          <Row>
            <h2 className="device">Welcome {this.state.device} user</h2>
          </Row>
          <Row id="slideSource" className="slideSource">
            <h1 className="slideSource"></h1>
          </Row>
          <Row>
            <Col><h4 className="cute">Responsive Accessible Code</h4></Col>
            <p className="swing">JavaScript, React, Html, Css, and Java are my game</p>
          </Row>
          <Row>
          <p id="black">To view my projects click on the toggle menu on the top left</p>
          </Row>
          <Row>
          {this.state.position}
          </Row>
          </div>
        </Container>
        </Breakpoint>
        <Breakpoint customQuery="(min-width: 500px) and (max-width: 1400px)">
        <Nav defaultActiveKey="/home" id="nav" className="flex-column">
          <Nav.Link href="/home"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
          <Nav.Link eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
          <Nav.Link eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
        </Nav>
        <Container>
        <div id="test">
          <Row style={{fontSize: "5rem" }}>
            W.J.SCHRATT
          </Row>
          <Row>
            <h2 className="device" style={{fontSize: "2rem" }}>Welcome {this.state.device} user</h2>
          </Row>
          <Row id="slideSource" className="slideSource">
            <h1 className="slideSource"></h1>
          </Row>
          <Row>
            <Col><h4 style={{fontSize: "2rem" }} className="cute">Responsive Accessible Code</h4></Col>
            <p className="swing">JavaScript, React, Html, Css, and Java are my game</p>
          </Row>
          <Row>
          <p id="blac" style={{fontSize: "1px", opacity:"1",    }}>To view my projects click on the toggle menu on the top left</p>
          </Row>
          <Row>
          {this.state.position}
          </Row>
          </div>
        </Container>
        </Breakpoint>





        </div>

      )}
}
