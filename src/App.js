import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overlay from "./Overlay.js"
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import PageOne from "./PageOne.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Breakpoint, BreakpointProvider } from 'react-socks';



class App extends Component {
  constructor(props) {
    super(props);

}



render() {

    return (
    <div className="App" >
    <BreakpointProvider>
    <Overlay  />
    </BreakpointProvider>
    <BreakpointProvider>
    <PageOne />
    </BreakpointProvider>
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
