import React, { Component } from 'react';
import "./PageOne.js"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import $ from 'jquery';



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
      this.timer.push(
      setTimeout(
            function() {
            }
            .bind(this),
            3000
        ))
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
                $("#slideSource").hide(50);
              }

              .bind(this),
              10
          ))
    }




  render() {
      return (

        <div className="page1">
        <Container>
        <div id="test">
          <Row>
            W.J.SCHRATT
          </Row>
          <Row id="slideSource">
            Front-End Web-Developer
          </Row>
        </div>
          <Row>
            <Col><h4 className="cute">Responsive</h4></Col>
            <Col><h4 className="cute">Competent</h4></Col>
            <Col><h4 className="cute">Accessible</h4></Col>
          </Row>
        </Container>




        </div>

      )}
}
