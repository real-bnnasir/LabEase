import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Card } from '@mui/material';
// import '../Dashboard.css'; // Assuming you have some styles in this file

const LineChart = ({ data, labels }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Student Performance',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 2,
                    fill: true,
                }
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Performance Over Time',
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                    // Define min and max to show fluctuations better
                    min: Math.min(...data) - 10,
                    max: Math.max(...data) + 10,
                },
            },
        };

        const myChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, [data, labels]);

    return (
        <Card sx={{ height: "100%", background: '#000435', color: 'white' }}>
            <canvas ref={canvasRef}></canvas>
        </Card>
    );
};

export default LineChart;
