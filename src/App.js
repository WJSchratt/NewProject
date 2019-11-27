import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlay from "./Overlay.js"
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import PageOne from "./PageOne.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTwo from "./PageTwo.js"


class App extends Component {
  constructor(props) {
    super(props);

}



render() {

    return (

    <div className="App"
      >
    <Overlay  />
    <PageOne />
    <PageTwo />
    </div>

  );
}}


export default App;
