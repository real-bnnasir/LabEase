// BarChart.js
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import '../Dashboard.css'
import { Card } from '@mui/material';

const BarChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Level 1',
                    data: [65, 55, 80, 81, 56, 60, 80],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Level 2',
                    data: [45, 49, 60, 71, 46, 50, 85],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Level 3',
                    data: [40, 29, 50, 65, 40, 45, 70],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Level 4',
                    data: [50, 90, 60, 60, 36, 60, 75],
                    backgroundColor: '#aaa',
                    borderColor: '#ddd',
                    borderWidth: 1,
                },
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
                    text: 'MONTHLY STUDENTS PERFORMANCE',
                },
            },
        };

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return <Card sx={{ height: "100%",background:'#000435',color:'hwite' }}><canvas ref={canvasRef}></canvas>;</Card> 
};

export default BarChart;


// BarChart.js
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Card, CardHeader, CardBody } from 'reactstrap';
// import 'chart.js/auto';

// const BarChart = () => {
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Sales',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Budget',
//         data: [45, 49, 60, 71, 46, 35, 30],
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Mine',
//         data: [25, 29, 50, 61, 36, 25, 20],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Yearly Development',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <Card sx={{ height: "100%",background:'#000435',color:'hwite' }}>
//         <Bar data={data} options={options} />
//     </Card>
//   );
// };

// export default BarChart;
