import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
    };
  }
  render() {
    const options = {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              // stepSize: 6,
              displayFormats: {
                quarter: "hA",
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              reverse: true,
              callback: (value) => {
                return "Medicine " + value;
              },
              max: 6,
              min: 1,
              stepSize: 1,
            },
          },
        ],
      },
    };

    return (
      <div className="chart">
        <Line data={this.state.chartData} height={130} options={options} />
      </div>
    );
  }
}
