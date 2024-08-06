import React from 'react' 
import { Card ,CardHeader, CardBody, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
import PolarChart from './PolarChart'
import RadarChart from './RadarChart'
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const Analysis = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Monthly Sales',
      data: [10, 20, 15, 30, 25, 35, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Sales: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Sales'
        },
        beginAtZero: true
      }
    }
  };

  const data2 = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return (
    // <div className='d-flex justify-content-center align-items-center'>
      <div>
      Analysis page is not ready
      <Card>
        <CardHeader>performance</CardHeader>
        <CardBody>
          <Row>
            <Col md={6}>
              <Card>
            <Line data={data} options={options} />
            </Card>
            </Col>
            <Col md={6}>
              <Card>
              <PolarChart />
              </Card>
            </Col>
            <Col md={6}>
              <Card>
              <RadarChart />
              </Card>
            </Col>
            <Col md={6}>
              <Card>
              <DoughnutChart />
              </Card>
            </Col>
            <Col md={6}>
              <Card>
              <LineChart />
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
    // </div>
  )
}

export default Analysis