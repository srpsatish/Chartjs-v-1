import React, { Component } from "react";
import "./pillstaken.scss";
import Chart from "../../components/chart/Chart";

export default class PillsTaken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pillsTakenData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      pillsTakenData: {
        datasets: [
          {
            data: [
              // {
              //   t: new Date(),
              //   y: 10,
              // },
            ],
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            showLine: false,
            fill: false,
            pointRadius: 8,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="chart">
        <Chart chartData={this.state.pillsTakenData} />
      </div>
    );
  }
}
