import React, { Component } from "react";
import '../css/USTable.css';
import Fade from "react-reveal/Fade";
import axios from "axios";


class USTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      country_code: "",
      response: [],
    };
  }

  getDailyCases = () => {
    console.log(this.props.data.CountryCode);
    if (this.props.data) {
      let country = this.props.data.CountryCode;
      axios
        .get("https://api.covid19api.com/total/dayone/country/" + country)
        .then((response) => {
          this.setState({
            response: response.data,
          });
          console.log(this.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.getDailyCases();
  }

  renderNum = (pass) => {
    if (pass) {
      let val = pass;
      return val.toLocaleString("en", {   
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    }
  };

  renderAvg = (type) => {
    let sum = 0;
    let data = this.state.response;
    if (data) {
      switch (type) {
        case "Confirmed":
          data.forEach((object, index) => {
            sum = (sum + object.Confirmed) / data.length;
          });
          break;
        case "Recovered":
          data.forEach((object, index) => {
            sum = (sum + object.Recovered) / data.length;
          });
          break;
        case "Deaths":
          data.forEach((object, index) => {
            sum = (sum + object.Deaths) / data.length;
          });
          break;
        default:
          break;
      }
    }

    return this.renderNum(sum);
  };

  render() {
    return (
      <Fade bottom cascade>
        <div className="container">
          <div class="row table-number">
          <div class="col-4">confirmed cases</div>
            <div class="col-4" style={{ color: "orange" }}>
              {this.renderNum(this.props.data.TotalConfirmed)}
              
            </div>
            <div class="col-4">total deaths</div>
            <div class="col-4" style={{ color: "red" }}>
              {this.renderNum(this.props.data.TotalDeaths)}
              
            </div>
            <div class="col-4">total recovered</div>
            <div class="col-4" style={{ color: "green" }}>
              {this.renderNum(this.props.data.TotalRecovered)}
              
            </div>
          </div>

          <div class="row table-label">
            
            
            
          </div>
        <hr></hr>
          <div class="mt-2 row table-number">
          <div class="col-4">avg cases/day</div>
            <div class="col-4" style={{ color: "chocolate" }}>
              {this.renderAvg("Confirmed")}
            </div>
            <div class="col-4">avg deaths/day</div>
            <div class="col-4" style={{ color: "brown" }}>
            {this.renderAvg("Deaths")}
            </div>
            <div class="col-4">avg recoveries/day</div>
            <div class="col-4" style={{ color: "#126629" }}>
            {this.renderAvg("Recovered")}
            </div>
          </div>
          <div class="row table-label">  
          </div>
        </div>
      </Fade>
    );
  }
}

export default USTable;
