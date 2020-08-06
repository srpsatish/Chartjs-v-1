import React, { Component } from "react";
import "./pillstaken.scss";
import { Line } from "react-chartjs-2";

export default class PillsTaken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pillsData: {
        datasets: [
          {
            data: [0, 1, 3, 6, 0],
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            showLine: false,
            fill: false,
            pointRadius : 8,
          },
          {
            data: [0, 4, 0, 2, 0],
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            showLine: false,
            fill: false,
            pointRadius : 8,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
            xAxes: [{
                type: 'category',
                labels: ["00:00", "06:00", "12:00", "18:00", "24:00"]
            }],
          yAxes: [
            {
              ticks: {
                reverse: true,
                callback: function (value, index, values) {
                  return "Medicine " + value;
                },
                max: 7,
                min: 1,
              },
            },
          ],
        },
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.pillsData}
          width={100}
          height={40}
          options={this.state.options}
        />
      </div>
    );
  }
}
