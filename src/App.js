import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlay from "./Overlay.js"
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import PageOne from "./PageOne.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    windowWith: window.innerWidth,
    device: "Desktop",
    position: window.scrollY
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
    this.setState ({position:window.scrollY})
    window.addEventListener('scroll', this.handlePosition);
    window.addEventListener('resize', this.handleResize);
    if (window.windowWidth > 1100 ){
      this.setState({device:"Desktop"})
    }
    else{
      this.setState({device:"Phone"})

    }
  }

  componentDidUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handlePostion);

  }




render() {

    return (

    <div className="App"
      onScroll={this.onScroll}>
    <Overlay/>
    <PageOne/>

<h1>Your view width is {this.state.windowWith} you are probably on a {this.state.device} {this.state.position}</h1>
<h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1>

<h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1><h1>hello</h1>
<h1>hello</h1>
<h1>hello</h1>



    </div>

  );
}}


export default App;
