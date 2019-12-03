import React, { Component } from 'react';
import $ from 'jquery';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class PageOne extends Component {

  handlePosition = (event) => {
  this.setState({ position: window.scrollY });
  if (this.state.position > 325){
      $('.type').show();
      setTimeout(
            function() {
            $('.type1').show();
            }
            .bind(this),
            5000
        )
        setTimeout(
              function() {
              $('.type2').show();
              }
              .bind(this),
              10000
          )
  }}

  componentDidMount() {
    this.setState ({position:window.scrollY})
    window.addEventListener('scroll', this.handlePosition);
  }

    render() {
        return (
          <div className="page2">

          <Row>
          <Col className="container">
          <h2 style={{}} className="type">I have experience with OOP, multiple libaries and frameworks.</h2>
          </Col>
          <Col>
          </Col>
          </Row>
          <Row>
          <Col>
          <h2 style={{}} className="type1">Such as but not limited to Node.Js, Jquery, MySQL, Bootstrap, Material, Bulma </h2>
          </Col>
          <Col>
          </Col>
          </Row>
          <Row>
          <Col>
          <h2 style={{}} className="type2">Thank you for visiting my page and check out my projects!</h2>
          </Col>
          <Col>
          </Col>
          </Row>

          <footer className="bottom">Feel free to contact me. I am always excited about new opportunities</footer>


          </div>
        )
}
}
