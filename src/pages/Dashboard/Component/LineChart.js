import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from '@mui/material';
import PolarChart from '../../Analysis/PolarChart'

const LineChart = () => {
    const chartRef = useRef(null);
    const myChartRef = useRef(null);

    // useEffect(() => {
    //     const ctx = chartRef.current.getContext('2d');

    //     // Destroy previous chart instance if it exists
    //     if (myChartRef.current) {
    //         myChartRef.current.destroy();
    //     }

    //     // Create a new line chart
    //     myChartRef.current = new Chart(ctx, {
    //         type: 'line',
    //         data: {
    //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //             datasets: [
    //                 {
    //                     label: 'My First dataset',
    //                     data: [65, 59, 80, 81, 56, 55, 40],
    //                     fill: false,
    //                     borderColor: 'rgba(75,192,192,1)',
    //                     tension: 0.1,
    //                 },
    //                 {
    //                     label: 'My Second dataset',
    //                     data: [28, 48, 40, 19, 86, 27, 90],
    //                     fill: false,
    //                     borderColor: 'rgba(153, 102, 255, 1)',
    //                     tension: 0.1,
    //                 },
    //             ],
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     position: 'top',
    //                 },
    //                 tooltip: {
    //                     enabled: true,
    //                 },
    //             },
    //             scales: {
    //                 x: {
    //                     display: true,
    //                     title: {
    //                         display: true,
    //                         text: 'Month',
    //                     },
    //                 },
    //                 y: {
    //                     display: true,
    //                     title: {
    //                         display: true,
    //                         text: 'Value',
    //                     },
    //                 },
    //             },
    //         },
    //     });

    //     // Cleanup function to destroy the chart instance when the component is unmounted
    //     return () => {
    //         if (myChartRef.current) {
    //             myChartRef.current.destroy();
    //         }
    //     };
    // }, []);

    return <Card sx={{ height: "100%", background: '#0001', color: 'hwite' }}>
        {/* <canvas ref={chartRef}></canvas> */}
        <PolarChart />
        </Card>
};

export default LineChart;
