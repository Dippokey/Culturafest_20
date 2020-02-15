import React, { Component } from 'react';
import logo from '../Cultura20Logo2.png';
import artist from '../images/rave-radio-poster.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import ScriptTag from 'react-script-tag';

import { Navbar, Nav, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar className="navbar-default" scrolling dark sticky="top" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="#home"><img alt='' className="logo_size" src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#top">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#id_event">Events</Nav.Link>
              {/* <Nav.Link href="#link">Headliners</Nav.Link>
              <Nav.Link href="#link">Sponsors</Nav.Link> */}
              <Nav.Link href="#link">Contact&emsp;</Nav.Link>
              <Button variant="outline-info">Register Now!</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <ScriptTag isHydrating={true} type="text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js" />
        <ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js" />

          {/* <div className="col-md-5" id="particle-slider"> */}
            {/* <div className="slides"> */}

          {/* <div className = "button-passes">
            <Button className="button-loc disabled" varient="Success">Get Your Passes Now</Button>
          </div> */}
          {/* <div className="row">
          <div className="col-md-6">

            <div className="boxed">
              <h1>Cultura 2020</h1>
              CMR Institute of Technology is in its 12<sup>th</sup> edition of their annual Techno-Cultural Fest Cultura'20. A most sought after fest in Bangalore, Cultura has grown to greater heights over the years. With a power-packed lineup of 45+ exciting events in store, along with a famous artist on the 2<sup>nd</sup> day of the fest, Cultura'20 has its own fan base among the college youth of Bangalore. This year, we have added yet another set of scintillating events that are trending among the college students, and are providing them with a huge platform to showcase their talent to the audience. Events like DJ Wars, Stand-up Comedy are the new additions to encourage everyone to give their best. With enthralling ideas, new initiatives and a more interactive Cultura'20, we strive to make you witness the best!
                      <br /><br />
              <h3>Cultura live in:</h3>
              <ul>
                <li><span id="days"></span>days</li>
                <li><span id="hours"></span>Hours</li>
                <li><span id="minutes"></span>Minutes</li>
                <li><span id="seconds"></span>Seconds</li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className = "row container1">

          <div className = "artist-card col-xs-6 col-sm-5 col-md-5">
             {/* <Button id = "get-passes-btn" className="button-loc disabled" varient="Success">Get Your Passes Now</Button> */}

             <img className="artist-pic" src={artist} alt="artist"/>
             <br /><br />
             <Button id = "gt-pass-bt" href="https://www.instamojo.com/CULTURA/cultura-dj-night-by-rave-radio-5e71e/">GET PASSES</Button>
          </div>

          <div className = "content1 col-xs-6 col-sm-5 col-md-5 boxed1">
              <h1>Cultura 2020</h1>
              CMR Institute of Technology is in its 12<sup>th</sup> edition of their annual Techno-Cultural Fest Cultura'20. A most sought after fest in Bangalore, Cultura has grown to greater heights over the years. With a power-packed lineup of 45+ exciting events in store, along with a famous artist on the 2<sup>nd</sup> day of the fest, Cultura'20 has its own fan base among the college youth of Bangalore. This year, we have added yet another set of scintillating events that are trending among the college students, and are providing them with a huge platform to showcase their talent to the audience. Events like DJ Wars, Stand-up Comedy are the new additions to encourage everyone to give their best. With enthralling ideas, new initiatives and a more interactive Cultura'20, we strive to make you witness the best!
                      <br /><br /><h2>6th and 7th March, 2020 </h2>
                      <br /><br /><br /><br />
              <h3>Cultura live in:</h3>
              <ul class = "timer">
                <li class = "timer1"><span id="days"></span>days</li>
                <li class = "timer1"><span id="hours"></span>Hours</li>
                <li class = "timer1"><span id="minutes"></span>Minutes</li>
                <li class = "timer1"><span id="seconds"></span>Seconds</li>
              </ul>


          </div>
        </div>

      </>
    );
  }
}

export default Home;
