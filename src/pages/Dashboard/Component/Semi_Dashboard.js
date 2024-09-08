import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import { FaFlask, FaFileAlt, FaBullhorn, FaTasks } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Table,TableCell, } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [labSessions, setLabSessions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from API and set state
    fetchLabSessions();
    fetchSubmissions();
    fetchAnnouncements();
    fetchTasks();
  }, []);

  const fetchLabSessions = async () => {
    // Fetch data from API
    const data = [
      { id: 1, title: 'Biology 101', date: '2024-07-25', time: '10:00 AM' },
      { id: 2, title: 'Microbiology', date: '2024-07-26', time: '1:00 PM' }
    ];
    setLabSessions(data);
  };

  const fetchSubmissions = async () => {
    const data = [
      { id: 1, student: 'John Doe', date: '2024-07-24' },
      { id: 2, student: 'Jane Smith', date: '2024-07-23' }
    ];
    setSubmissions(data);
  };

  const fetchAnnouncements = async () => {
    const data = [
      { id: 1, title: 'Lab Safety Guidelines Updated', date: '2024-07-24' },
      { id: 2, title: 'New Experiment Protocols', date: '2024-07-22' }
    ];
    setAnnouncements(data);
  };

  const fetchTasks = async () => {
    const data = [
      { id: 1, task: 'Grade lab reports', due: '2024-07-27' },
      { id: 2, task: 'Prepare next experiment', due: '2024-07-28' }
    ];
    setTasks(data);
  };

  return (
    <Box>
      {/* <h2 className="my-4 text-center">Lecturer Dashboard</h2> */}
      <Row>
        <Col md="6">
          <Link to='/session_management' style={{textDecoration:'none'}}>
          <Card>
            <CardHeader><FaFlask /> Upcoming Lab Sessions</CardHeader>
            <CardBody>
              <ul>
                {labSessions.map(session => (
                //   <li key={session.id}>{session.title} - {session.date} at {session.time}</li>   
              <Table key={session.id}>
                  <TableCell>{session.title}</TableCell>
                  <TableCell>{session.date}</TableCell>
                  <TableCell>{session.time}</TableCell>
              </Table>
                ))}
              </ul>
            </CardBody>
          </Card>
          </Link>
        </Col>
        <Col md="6">
          <Link to='/session_management' style={{textDecoration:'none'}}>
          <Card>
            <CardHeader><FaBullhorn /> Announcements</CardHeader>
            <CardBody>
              <ul>
                {announcements.map(announcement => (
                //   <li key={announcement.id}>{announcement.title} - Posted on {announcement.date}</li>
                  <Table key={announcement.id}>
                  <TableCell>{announcement.title}</TableCell>
                  <TableCell>{announcement.date}</TableCell>
                  {/* <TableCell>{session.time}</TableCell> */}
              </Table>
                ))}
              </ul>
            </CardBody>
          </Card>
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <Card>
            <CardHeader><FaFileAlt />Quick Action</CardHeader>
            <CardBody>
              {/* <ul>
                {submissions.map(submission => (
                  <li key={submission.id}>{submission.student} - Submitted on {submission.date}</li>
                ))}
              </ul> */}
              <div className="text-center">
            <Button color="primary" onClick={() => alert('Create Assignment clicked!')}>
              Create Assignment
            </Button>
            <Button color="secondary" onClick={() => alert('Message Students clicked!')}>
              Message Students
            </Button>
            <Button color="success" onClick={() => alert('Access Student Data clicked!')}>
              Access Student Data
            </Button>
          </div>
            </CardBody>
          </Card>
        </Col>
        {/* <Col md="6">
          <Card>
            <CardHeader><FaTasks /> Pending Tasks</CardHeader>
            <CardBody>
              <ul>
                {tasks.map(task => (
                  <li key={task.id}>{task.task} - Due by {task.due}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Col> */}
      </Row>
      {/* <Row className="mt-4">
        <Col>
          <div className="text-center">
            <Button color="primary" onClick={() => alert('Create Assignment clicked!')}>
              Create Assignment
            </Button>
            <Button color="secondary" onClick={() => alert('Message Students clicked!')}>
              Message Students
            </Button>
            <Button color="success" onClick={() => alert('Access Student Data clicked!')}>
              Access Student Data
            </Button>
          </div>
        </Col>
      </Row> */}
    </Box>
  );
};

export default Dashboard;
