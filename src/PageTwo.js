import React, { Component } from 'react';
import $ from 'jquery';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useMediaQuery } from 'react-responsive'


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

export default class PageOne extends Component {

  handlePosition = (event) => {
  this.setState({ position: window.scrollY });
  if (this.state.position > 200){
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
          <div>
          <Desktop>
            <div className="page2">
              <Row>
                <Col className="container">
                  <h2 style={{fontSize:"1.5rem"}} className="type">Johns-Website:web.skills$ I have experience with OOP, multiple libaries and frameworks.</h2>
                </Col>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
              <h2 style={{fontSize:"1.5rem"}} className="type1">Such as but not limited to Node.Js, Jquery, MySQL, Bootstrap, Material, Bulma. </h2>
                </Col>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 style={{fontSize:"1.5rem"}} className="type2">I am versed with Git, GitHub, task management websites and am fluent in German.</h2>
                </Col>
                <Col>
                </Col>
              </Row>
              <footer style={{fontSize:"2rem"}}className="bottom">Feel free to contact me. I am always excited about new opportunities</footer>
              </div>
            </Desktop>
            <Tablet>
              <div className="page2" >
                <Row>
                  <Col className="container">
                    <h2 style={{fontSize:"1rem"}} className="type">Johns-Website:web.skills$ I have experience with OOP, multiple libaries and frameworks.</h2>
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                <h2 style={{fontSize:"1rem"}} className="type1">Such as but not limited to Node.Js, Jquery, MySQL, Bootstrap, Material, Bulma. </h2>
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h2 style={{fontSize:"1rem"}}  className="type2">I am versed with Git, GitHub, task management websites and am fluent in German.</h2>
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <footer style={{fontSize:"0.8rem"}}className="bottom">Feel free to contact me. I am always excited about new opportunities</footer>
                </div>
              </Tablet>
              <Mobile>
                <div className="page2" style={{height:"20vh"}}>
                  <Row>
                    <Col className="container">
                      <h2 style={{fontSize:"0.75rem"}} className="type">Johns-Website:web.skills$ OOP, multiple libaries and frameworks...</h2>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                  <h2 style={{fontSize:"0.75rem"}} className="type1"> Node.Js, Jquery, MySQL, Bootstrap, Material, Bulma...</h2>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 style={{fontSize:"0.75rem"}} className="type2">Git, GitHub, task management websites...</h2>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                  <footer style={{fontSize:".5rem"}}className="bottom">Feel free to contact me. I am always excited about new opportunities</footer>
                  </div>
                </Mobile>
              </div>



        )
}
}
