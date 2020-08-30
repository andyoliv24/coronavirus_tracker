import React, { Component } from "react";
import USTable from "./USTable";
import Summary from "./Summary";
import Chart from "./Chart";
import axios from "axios";
import "../styles/Main.css";
import { Tabs, Radio, Card, Row, Collapse } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { TabPane } = Tabs;
const { Panel } = Collapse;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryData: [],
      globalData: [],
      chartData: [],
      mode: "left",
      activeKey: "0",
    };
  }

  callAPI = () => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        console.log("RESPONSE", response);
        this.setState({
          summaryData: response.data.Countries,
          globalData: response.data.Global,
        });
        this.state.globalData.Country = "Global";
        this.state.globalData.CountryCode = "Global";
        this.state.summaryData.push(this.state.globalData);
        this.setState({ summaryData: this.state.summaryData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.callAPI();
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  onChange = (activeKey) => {
    this.setState({ activeKey: activeKey });
  };

  sortBy(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  callback = (key) => {
    console.log(key);
  };


  renderTabPanes = () => {
    let countries = [];
    countries = this.state.summaryData;

    countries = this.sortBy(this.state.summaryData, "TotalConfirmed");
    countries.reverse();

    countries = countries.map((elem, index) => {
      return (
        <TabPane tab={elem.Country} key={index}>
          <h4 class="title ml-2">{elem.Country}</h4>

          <div class="row">
            <div class="col-xs-12 col-md-4 pr-md-0">
              <Collapse onChange={this.callback} defaultActiveKey={["1"]}>
                <Panel header="Statistics" key="1">
                  <USTable data={elem} />
                </Panel>
              </Collapse>
              <div class="d-none d-md-block">
              </div>
            </div>
            <div class="col-xs-12 col-md-8 pl-md-0">
              <Collapse onChange={this.callback} defaultActiveKey={["2"]}>
                <Panel header="Charts" key="2">
                  <div class="">
                    <Chart data={elem} />
                  </div>
                </Panel>
              </Collapse>
            </div>
          </div>
        </TabPane>
      );
    });

    return countries;
  };

  render() {
    const { mode } = this.state;
    return (
      <div class="App">
        <Tabs
          activeKey={this.state.activeKey}
          tabPosition={mode}
          style={{ height: "100vh" }}
          onChange={this.onChange}
        >
          {this.renderTabPanes()}
        </Tabs>

      </div>
    );
  }
}

export default Main;