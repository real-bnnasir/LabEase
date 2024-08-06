// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import { Card } from '@mui/material';

// const DoughnutChart = () => {
//     const chartRef = useRef(null);
//     const myChartRef = useRef(null);

//     useEffect(() => {
//         const ctx = chartRef.current.getContext('2d');

//         if (myChartRef.current) {
//             myChartRef.current.destroy();
//         }

//         myChartRef.current = new Chart(ctx, {
//             type: 'doughnut',
//             data: {
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//                 datasets: [
//                     {
//                         label: '# of Votes',
//                         data: [12, 19, 3, 5, 2],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                         ],
//                         borderWidth: 1,
//                     },
//                 ],
//             },
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         position: 'top',
//                     },
//                     tooltip: {
//                         enabled: true,
//                     },
//                 },
//             },
//         });

//         return () => {
//             if (myChartRef.current) {
//                 myChartRef.current.destroy();
//             }
//         };
//     }, []);

//     return <Card sx={{ height: "100%", background: '#000435', color: 'hwite' }}><canvas ref={chartRef}></canvas>;</Card> 
// };

// export default DoughnutChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components required for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      'Submitted',
      'Not Submitted',
      'Pending'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#000435',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
      // Custom plugin to add text in the center
      centerText: {
        display: true,
        text: 'Report',
      },
    }
  };

  // Plugin definition
  const centerTextPlugin = {
    id: 'centerText',
    beforeDraw: (chart) => {
      if (chart.config.options.plugins.centerText) {
        const ctx = chart.ctx;
        const { width, height } = chart;
        ctx.restore();
        
        const fontSize = (height / 200).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = 'middle';
        
        const text = chart.config.options.plugins.centerText.text;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  };

  // Register the plugin
  ChartJS.register(centerTextPlugin);

  return (
    <div style={{ width: '100%', height: '100%', background: '#eeee' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

