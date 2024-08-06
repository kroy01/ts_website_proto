import React, { Component, useState, useRef, useEffect } from "react";
import { render } from 'react-dom';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import "./LineChart.css";

async function fetchData() {
    const apiurl = "https://api.thingspeak.com/channels/2472562/feeds.json?api_key=ZI2OR2J1FVP8MT3Y&results=30";

    const response = await fetch(apiurl);

    const lineChartData = await response.json();

    return lineChartData;
};


// function LineChart(props) {
//     render(){
//         return (
//         <div className="lc-border-property">
//             <Line //datasetIdKey={props.id} 
//             ref={this.chartReference} 
//             data={this.state.data}
//             // data={props.data} 
//             width={1200} 
//             height={1000} 
            
            
//             options={{ maintainAspectRatio: false, scales : {x:{grid:{display:false}},y:{grid:{display:false}}}, pointRadius : "0", pointHoverRadius : "10" }}/>
//         </div>
//     );
//     }
    
// };

class LineChart extends Component {
    constructor() {
        super();
        this.chartReference = React.createRef();
        
        this.state = {
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    //backgroundColor: ['red', 'green', 'blue']
                }]
            }
        };
    }
    async componentDidMount() {
        this.updateChartInterval = setInterval(async () => {
            const jsonData = await fetchData();
            const labels = jsonData.feeds.map(feed => feed.field2);
            const data = jsonData.feeds.map(feed => parseInt(feed.field1));

            const newData = {
                labels: labels,
                datasets: [{
                    data: data,
                    // backgroundColor: ['red', 'green', 'blue']
                }]
            };

            this.setState({ data: newData });
        }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.updateChartInterval);
    }
    render(){
        return (
        <div className="lc-border-property">
            <Line //datasetIdKey={props.id} 
            ref={this.chartReference} 
            data={this.state.data}
            // data={props.data} 
            width={1200} 
            height={1000} 
            
            
            options={{ maintainAspectRatio: false, scales : {x:{grid:{display:false}},y:{grid:{display:false}}}, pointRadius : "0", pointHoverRadius : "10" }}/>
        </div>
    );
    }
    
};
export default LineChart;