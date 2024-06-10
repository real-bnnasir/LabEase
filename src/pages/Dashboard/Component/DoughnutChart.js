import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Card } from '@mui/material';

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const myChartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (myChartRef.current) {
            myChartRef.current.destroy();
        }

        myChartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
            },
        });

        return () => {
            if (myChartRef.current) {
                myChartRef.current.destroy();
            }
        };
    }, []);

    return <Card sx={{ height: "100%", background: '#000435', color: 'hwite' }}><canvas ref={chartRef}></canvas>;</Card> 
};

export default DoughnutChart;
