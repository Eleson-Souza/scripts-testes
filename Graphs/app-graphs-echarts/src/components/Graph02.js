import React, { useEffect } from "react";
import { Chart } from 'chart.js';


function Graph02() {

    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');

        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth()+1;

        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: [
                    `${day-9}/${month}`, 
                    `${day-8}/${month}`, 
                    `${day-7}/${month}`, 
                    `${day-6}/${month}`, 
                    `${day-5}/${month}`, 
                    `${day-4}/${month}`, 
                    `${day-3}/${month}`, 
                    `${day-2}/${month}`, 
                    `${day-1}/${month}`, 
                    `${day}/${month}`, 
                ],
                datasets: [{
                    label: 'GMS-4683',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45, 22, 32, 45]
                }, {
                    label: 'NAJ-2235',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52] 
                }, {
                    label: 'MHC-4062',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'IAO-6997',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'MUX-4893',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'HZB-6269',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'MXR-6872',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'MVI-3060',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'KCC-7197',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }, {
                    label: 'JJY-4506',
                    borderColor: 'rgb(125, 120, 188)',
                    data: [0, 15, 25, 10, 5, 8, 10, 25, 35, 52]
                }]
            },

            // Configuration options go here
            options: { 
                tooltips: {
                    intersect: false,
                    mode: 'x-axis'
                }
            }
        });
    }, []);

    return (
        <div style={{ width: 400, height: 500 }}>
            <canvas id="myChart" width="1000px" height="1000px"></canvas>
        </div>
    );
}

export default Graph02;