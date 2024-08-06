import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardBody } from 'reactstrap';
import 'chart.js/auto';

const LineChart = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'rgb(153, 102, 255)',
        tension: 0.1
      },
      {
        label: 'My Third Dataset',
        data: [45, 25, 35, 75, 95, 15, 65],
        fill: false,
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '100%',background:'#eee',color:'hwite' }} >
        <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
