import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import { Carousel } from "antd";
// import { Parallax } from 'react-parallax';
import '../styles/Summary.css'
// import Fade from 'react-reveal/Fade';

class Summary extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     visible: false
  //   }
  // }

  render() {
    return (
      <div className="mt-5 mb-5 mr-5 ml-5 mb-5">
        <Carousel autoplay autoplaySpeed="75">
          <div class="summary">
            <h3>What is COVID-19?</h3>
            COVID-19 (also know as coronavirus) is a disease that causes
            respiratory illness (like the flu) with symptoms such as a cough,
            fever, and in more severe cases, difficulty breathing.
          </div>
          <div class="summary">
            <h3>How it spreads</h3>
            Coronavirus disease spreads primarily through contact with an
            infected person when they cough or sneeze. It also spreads when a
            person touches a surface or object that has the virus on it, then
            touches their eyes, nose, or mouth.
          </div>
          <div class="summary">
            <h3>Safety</h3>
            <p style={{ textAlign: "left" }} />
            <p />
            1) Don't touch your eyes, nose, or mouth
            <p />
            2) Wash your hands often for at least 20 seconds
            <p />
            3) Avoid contact with someone who is sick/Maintain a 6 ft distance
            when around another person
            <p />
            4) Cover your mouth when you sneeze or cough
            <p />
            5) Clean and disinfect frequently touched surfaces
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Summary;