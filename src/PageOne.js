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
    if (this.state.postion === 728){

    }
  }

    componentDidMount() {
      $("cute").hide();
      this.setState ({position:window.scrollY})
      window.addEventListener('scroll', this.handlePosition);
      window.addEventListener('resize', this.handleResize);
      document.addEventListener('click', this.fade);
      if (window.windowWidth > 1100 ){
        this.setState({device:"Desktop"})
      }
      else{
        this.setState({device:"Phone"})

      }
    }

    componentDidUnmount() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handlePostion);
    }

    fade = () => {
      var slideSource = document.getElementById('slideSource');
      this.timer = [];
      console.log("hey")
      document.removeEventListener('click', this.fade);
        this.timer.push(
        setTimeout(
              function() {
                $(".cute").show(500);
              }
              .bind(this),
              1000
          ))
        this.timer.push(
        setTimeout(
              function() {
                $(".cute").hide();
              }

              .bind(this),
              10

          ))
    }




  render() {
      return (

        <div className="page1">
        <Nav defaultActiveKey="/home" id="nav" className="flex-column">
          <Nav.Link href="/home"><Image className="sidebar" alt="image of the github logo" src={Git} roundedCircle /></Nav.Link>
          <Nav.Link eventKey="link-1"><Image className="sidebar" alt="logo of mail" src={Mail} /></Nav.Link>
          <Nav.Link eventKey="link-2"><Image className="sidebar" alt="image of the LinkedIn logo" src={LinkIn} /></Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav>
        <Container>
        <div id="test">
          <Row>
            W.J.SCHRATT
          </Row>
          <Row id="slideSource" className="slideSource">
            <h1 className="slideSource"></h1>
          </Row>
          <Row>
            <Col><h4 className="cute">Responsive Accessible Code</h4></Col>

          </Row>
          </div>
        </Container>




        </div>

      )}
}
