import React, { Component } from "react";
import axios from "axios";
import "../css/Chart.css";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar,
  ResponsiveContainer,
} from "recharts";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }




  getDailyCases = () => {
    

    if (this.props.data) {
      let country = this.props.data.CountryCode;
      axios
        .get(
          "https://api.covid19api.com/total/dayone/country/" +
            this.props.data.CountryCode
        )
        .then((response) => {
          this.setState({
            response: response.data,
          });
          // console.log(this.state);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.getDailyCases();
  }

  formatXAxis = (tickItem) => {
    let label = tickItem.slice(5, 10);
    return label;
  };

  findMonth = (val) => {
    let str = "";
    switch (val) {
      case "01":
        str = "January";
        break;
      case "02":
        str = "February";
        break;
      case "03":
        str = "March";
        break;
      case "04":
        str = "April";
        break;
      case "05":
        str = "May";
        break;
      case "06":
        str = "June";
        break;
      case "07":
        str = "July";
        break;
      case "08":
        str = "August";
        break;
      case "09":
        str = "September";
        break;
      case "10":
        str = "October";
        break;
      case "11":
        str = "November";
        break;
      case "12":
        str = "December";
        break;
      default:
        str = "not working";
    }
    return str;
  };

  formatTooltipLabel = (elem) => {
    let mon = elem.slice(5, 7);
    let day = elem.slice(8, 10);
    return this.findMonth(mon).concat(" " + day);
  };

  renderCharts = (data) => {
    return (
      <>
        <div class="chart-inner">
          <p class="chart-inner-title">
            Total Confirmed Cases, Recovered Cases & Deaths since Jan. 22
          </p>
          <LineChart
            width={750}
            height={445}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" tickFormatter={this.formatXAxis} />
            <YAxis
              type="number"
              domain={["auto", 400000]}
              tickFormatter={(value) =>
                new Intl.NumberFormat("en").format(value)
              }
            />
            <Tooltip
              labelFormatter={this.formatTooltipLabel}
              formatter={(value) => new Intl.NumberFormat("en").format(value)}
            />
            <Legend wrapperStyle={{}} />
            <Line type="monotone" dataKey="Confirmed" stroke="orange" />
            <Line type="monotone" dataKey="Recovered" stroke="green" />
            <Line type="monotone" dataKey="Deaths" stroke="red" />
          </LineChart>
        </div>
      </>
    );
  };

  render() {
    return (
      <>
        <div class="chart-container">
          {this.renderCharts(this.state.response)}
        </div>
      </>
    );
  }
}

export default Chart;