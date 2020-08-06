import React, { Component } from "react";
import { Line } from "react-chartjs-2";



export default class Chart extends Component {
  constructor(props){
    super(props);

    this.state = {
      chartData : props.chartData
    }
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
            type: "category",
            labels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
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
        <Line data={this.state.chartData} options={options} />
      </div>
    );
  }
}
