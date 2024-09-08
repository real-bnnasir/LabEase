// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Table,
//   TableCell,
//   Collapse,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem
// } from "@mui/material";
// import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
// import { FaFlask, FaBullhorn } from "react-icons/fa";

// const Session = () => {
//   const [labSessions, setLabSessions] = useState([]);
//   const [submissions, setSubmissions] = useState([]);
//   const [announcements, setAnnouncements] = useState([]);
//   const [collapseOpen, setCollapseOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState("");

//   useEffect(() => {
//     // Fetch data from API and set state
//     fetchLabSessions();
//     // fetchSubmissions();
//     // fetchAnnouncements();
//     // fetchTasks();
//   }, []);

//   const fetchLabSessions = async () => {
//     // Fetch data from API
//     const data = [
//       { id: 1, title: "Biology 101", date: "2024-07-25", time: "10:00 AM" },
//       { id: 2, title: "Microbiology", date: "2024-07-26", time: "1:00 PM" }
//     ];
//     setLabSessions(data);
//   };

//   const toggleCollapse = () => {
//     setCollapseOpen(!collapseOpen);
//   };

//   const handleCourseChange = event => {
//     setSelectedCourse(event.target.value);
//   };

//   return (
//     <Box>
//       <Card>
//         <CardHeader>
//           <FaFlask /> Upcoming Lab Sessions
//         </CardHeader>
//         <CardBody>
//           <ul>
//             {labSessions.map(session => (
//               //   <li key={session.id}>{session.title} - {session.date} at {session.time}</li>
//               <Table key={session.id}>
//                 <TableCell>{session.title}</TableCell>
//                 <TableCell>{session.date}</TableCell>
//                 <TableCell>{session.time}</TableCell>
//               </Table>
//             ))}
//           </ul>
//           <div className="d-flex align-items-end justify-content-end">
//             <Button
//               variant="contained"
//               onClick={toggleCollapse}
//               style={{ background: "#000435", marginBottom: "10px" }}
//             >
//               Add New Session
//             </Button>
//           </div>
//           <Collapse in={collapseOpen} mt={3}>
//             <Card>
//               <CardBody>
//                 {/* Your tax details content here */}
//                 <FormControl variant="outlined" style={{ minWidth: "100%" }}>
//                   <InputLabel id="course-select-label">
//                     Select Subject
//                   </InputLabel>
//                   <Select
//                     labelId="course-select-label"
//                     value={selectedCourse}
//                     onChange={handleCourseChange}
//                     label="Select Course"
//                     fullWidth
//                   >
//                     <MenuItem value="">
//                       <em>None</em>
//                     </MenuItem>
//                     <MenuItem value="BIO 101">BIO 101</MenuItem>
//                     <MenuItem value="BIO 102">BIO 102</MenuItem>
//                     <MenuItem value="BIO 103">BIO 103</MenuItem>
//                     <MenuItem value="CHM 111">CHM 111</MenuItem>
//                     <MenuItem value="CHM 121">CHM 121</MenuItem>
//                     <MenuItem value="PHY 1201">PHY 1201 </MenuItem>
//                     <MenuItem value="PHY 1202"> PHY 1202</MenuItem>
//                   </Select>
//                 </FormControl>

//               </CardBody>
//             </Card>
//           </Collapse>
//         </CardBody>
//         <CardHeader>
//           <FaFlask /> Previous Lab Session
//         </CardHeader>
//         <CardBody>
//           <ul>
//             {labSessions.map(session => (
//               //   <li key={session.id}>{session.title} - {session.date} at {session.time}</li>
//               <Table key={session.id}>
//                 <TableCell>{session.title}</TableCell>
//                 <TableCell>{session.date}</TableCell>
//                 <TableCell>{session.time}</TableCell>
//               </Table>
//             ))}
//           </ul>
//         </CardBody>
//       </Card>
//     </Box>
//   );
// };

// export default Session;

import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Button as MuiButton,
  Modal,
  Typography
} from "@mui/material";
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import { FaFlask, FaEdit, FaSave } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Session = () => {
  const [labSessions, setLabSessions] = useState([]);
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [newSession, setNewSession] = useState({
    subtitle: "",
    date: "",
    time: ""
  });
  const [editingSession, setEditingSession] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchLabSessions();
  }, []);

  const fetchLabSessions = async () => {
    const data = [
      {
        id: 1,
        title: "Biology 101",
        subtitle: "Intro to Cells",
        date: "2024-07-25",
        time: "10:00 AM"
      },
      {
        id: 2,
        title: "Microbiology",
        subtitle: "Bacteria Basics",
        date: "2024-07-26",
        time: "1:00 PM"
      }
    ];
    setLabSessions(data);
  };

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const handleCourseChange = event => {
    setSelectedCourse(event.target.value);
  };

  const handleNewSessionChange = event => {
    const { name, value } = event.target;
    setNewSession(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSession = () => {
    if (selectedCourse === "") {
      alert("Please select a course");
      return;
    }

    const newSessionData = {
      id: labSessions.length + 1,
      title: selectedCourse,
      subtitle: newSession.subtitle,
      date: newSession.date,
      time: newSession.time
    };
    setLabSessions(prev => [...prev, newSessionData]);
    setCollapseOpen(false);
    setSelectedCourse("");
    setNewSession({ subtitle: "", date: "", time: "" });
  };

  const handleEditSession = id => {
    const session = labSessions.find(session => session.id === id);
    setEditingSession(id);
    setSelectedCourse(session.title);
    setNewSession({
      subtitle: session.subtitle,
      date: session.date,
      time: session.time
    });
    setIsModalOpen(true);
  };

  const handleSaveEdit = id => {
    setLabSessions(prev =>
      prev.map(session =>
        session.id === id
          ? {
              ...session,
              title: selectedCourse,
              subtitle: newSession.subtitle,
              date: newSession.date,
              time: newSession.time
            }
          : session
      )
    );
    setEditingSession(null);
    setSelectedCourse("");
    setNewSession({ subtitle: "", date: "", time: "" });
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingSession(null);
    setSelectedCourse("");
    setNewSession({ subtitle: "", date: "", time: "" });
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Card>
        <CardHeader>
          <FaFlask /> Upcoming Lab Sessions
        </CardHeader>
        <CardBody>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {labSessions.map(session => (
                  <TableRow key={session.id}>
                    <TableCell>{session.title}</TableCell>
                    <TableCell>{session.subtitle}</TableCell>
                    <TableCell>{session.date}</TableCell>
                    <TableCell>{session.time}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEditSession(session.id)}>
                        <FaEdit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="d-flex align-items-end justify-content-end">
            <Button
              variant="contained"
              onClick={toggleCollapse}
              style={{ background: "#000435", margin: "10px 0" }}
            >
              Add New Session
            </Button>
          </div>
          <Collapse in={collapseOpen} mt={3}>
            <Card>
              <CardBody>
                <FormControl
                  variant="outlined"
                  style={{ minWidth: "100%", marginBottom: "15px" }}
                >
                  <InputLabel id="course-select-label">
                    Select Subject
                  </InputLabel>
                  <Select
                    labelId="course-select-label"
                    value={selectedCourse}
                    onChange={handleCourseChange}
                    label="Select Course"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="BIO 101">BIO 101</MenuItem>
                    <MenuItem value="BIO 102">BIO 102</MenuItem>
                    <MenuItem value="BIO 103">BIO 103</MenuItem>
                    <MenuItem value="CHM 111">CHM 111</MenuItem>
                    <MenuItem value="CHM 121">CHM 121</MenuItem>
                    <MenuItem value="PHY 1201">PHY 1201 </MenuItem>
                    <MenuItem value="PHY 1202"> PHY 1202</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Session Title"
                  variant="outlined"
                  fullWidth
                  name="subtitle"
                  value={newSession.subtitle}
                  onChange={handleNewSessionChange}
                  style={{ marginBottom: "15px" }}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  type="date"
                  fullWidth
                  name="date"
                  value={newSession.date}
                  onChange={handleNewSessionChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  style={{ marginBottom: "15px" }}
                />
                <TextField
                  label="Time"
                  variant="outlined"
                  type="time"
                  fullWidth
                  name="time"
                  value={newSession.time}
                  onChange={handleNewSessionChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  style={{ marginBottom: "15px" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddSession}
                  style={{ background: "#000435" }}
                >
                  Save Session
                </Button>
              </CardBody>
            </Card>
          </Collapse>
        </CardBody>
        <CardHeader>
          <FaFlask /> Previous Lab Session
        </CardHeader>
        <CardBody>
          <ul>
            {labSessions.map(session => (
              <Table key={session.id}>
                <TableCell>{session.title}</TableCell>
                <TableCell>{session.date}</TableCell>
                <TableCell>{session.time}</TableCell>
              </Table>
            ))}
          </ul>
        </CardBody>
      </Card>

      <Modal open={isModalOpen} onClose={handleCancelEdit}>
        <Box
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: 20,
            boxShadow: 24,
            borderRadius: 8
          }}
        >
          <Typography variant="h6" gutterBottom>
            Edit Session
          </Typography>
          <FormControl
            variant="outlined"
            style={{ minWidth: "100%", marginBottom: "15px" }}
          >
            <InputLabel id="course-select-label">Select Subject</InputLabel>
            <Select
              labelId="course-select-label"
              value={selectedCourse}
              onChange={handleCourseChange}
              label="Select Course"
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="BIO 101">BIO 101</MenuItem>
              <MenuItem value="BIO 102">BIO 102</MenuItem>
              <MenuItem value="BIO 103">BIO 103</MenuItem>
              <MenuItem value="CHM 111">CHM 111</MenuItem>
              <MenuItem value="CHM 121">CHM 121</MenuItem>
              <MenuItem value="PHY 1201">PHY 1201 </MenuItem>
              <MenuItem value="PHY 1202"> PHY 1202</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Session Title"
            variant="outlined"
            fullWidth
            name="subtitle"
            value={newSession.subtitle}
            onChange={handleNewSessionChange}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            fullWidth
            name="date"
            value={newSession.date}
            onChange={handleNewSessionChange}
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginBottom: "15px" }}
          />
          <TextField
            label="Time"
            variant="outlined"
            type="time"
            fullWidth
            name="time"
            value={newSession.time}
            onChange={handleNewSessionChange}
            InputLabelProps={{
              shrink: true
            }}
            style={{ marginBottom: "15px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MuiButton
              variant="contained"
              color="primary"
              onClick={() => handleSaveEdit(editingSession)}
              style={{ background: "#000435" }}
            >
              Save
            </MuiButton>
            <MuiButton
              variant="contained"
              color="secondary"
              onClick={handleCancelEdit}
              startIcon={<IoMdClose />}
            >
              Cancel
            </MuiButton>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default Session;
