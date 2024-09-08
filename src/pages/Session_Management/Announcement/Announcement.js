import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableCell,
} from "@mui/material";
import { Row, Col, Card, CardHeader, CardBody, } from "reactstrap";
import { FaFlask, FaBullhorn } from "react-icons/fa";

const Session_M = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [collapseOpen, setCollapseOpen] = useState(false);

  useEffect(() => {
    // Fetch data from API and set state
    // fetchLabSessions();
    // fetchSubmissions();
    fetchAnnouncements();
    // fetchTasks();
  }, []);


  const fetchAnnouncements = async () => {
    const data = [
      { id: 1, title: "Lab Safety Guidelines Updated", date: "2024-07-24" },
      { id: 2, title: "New Experiment Protocols", date: "2024-07-22" }
    ];
    setAnnouncements(data);
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };


  return (
    <Box>
      <Card>
        <CardHeader>
          <FaBullhorn /> Announcements
        </CardHeader>
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
    </Box>
  );
};

export default Session_M;
