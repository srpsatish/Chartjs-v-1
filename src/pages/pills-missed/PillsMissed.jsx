import React, { Component } from "react";
import Chart from "../../components/chart/Chart";

export default class PillsMissed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pillsMissedData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      pillsMissedData: {
        datasets: [
          {
            data: [0, 2, 4, 1, 0],
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
        <Chart chartData={this.state.pillsMissedData} />
      </div>
    );
  }
}
