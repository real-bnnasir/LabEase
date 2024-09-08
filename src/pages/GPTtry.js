// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
// import { FaFlask, FaFileAlt, FaBullhorn, FaTasks } from 'react-icons/fa';
// import LineChart from './LineChart'; // Import the LineChart component
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//     const [labSessions, setLabSessions] = useState([]);
//     const [submissions, setSubmissions] = useState([]);
//     const [announcements, setAnnouncements] = useState([]);
//     const [tasks, setTasks] = useState([]);
//     const [chartData, setChartData] = useState([]);
//     const [chartLabels, setChartLabels] = useState([]);

//     useEffect(() => {
//         fetchLabSessions();
//         fetchSubmissions();
//         fetchAnnouncements();
//         fetchTasks();
//         fetchChartData();
//     }, []);

//     const fetchLabSessions = async () => {
//         // Placeholder for fetching data
//         const data = [
//             { id: 1, title: 'Biology 101', date: '2024-07-25', time: '10:00 AM' },
//             { id: 2, title: 'Microbiology', date: '2024-07-26', time: '1:00 PM' }
//         ];
//         setLabSessions(data);
//     };

//     const fetchSubmissions = async () => {
//         const data = [
//             { id: 1, student: 'John Doe', date: '2024-07-24' },
//             { id: 2, student: 'Jane Smith', date: '2024-07-23' }
//         ];
//         setSubmissions(data);
//     };

//     const fetchAnnouncements = async () => {
//         const data = [
//             { id: 1, title: 'Lab Safety Guidelines Updated', date: '2024-07-24' },
//             { id: 2, title: 'New Experiment Protocols', date: '2024-07-22' }
//         ];
//         setAnnouncements(data);
//     };

//     const fetchTasks = async () => {
//         const data = [
//             { id: 1, task: 'Grade lab reports', due: '2024-07-27' },
//             { id: 2, task: 'Prepare next experiment', due: '2024-07-28' }
//         ];
//         setTasks(data);
//     };

//     const fetchChartData = async () => {
//         // Placeholder for chart data
//         const data = [75, 80, 85, 90, 95];
//         const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
//         setChartData(data);
//         setChartLabels(labels);
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Lecturer Dashboard</h2>
//             <Row>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader><FaFlask /> Upcoming Lab Sessions</CardHeader>
//                         <CardBody>
//                             <ul>
//                                 {labSessions.map(session => (
//                                     <li key={session.id}>{session.title} - {session.date} at {session.time}</li>
//                                 ))}
//                             </ul>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader><FaFileAlt /> Recent Student Submissions</CardHeader>
//                         <CardBody>
//                             <ul>
//                                 {submissions.map(submission => (
//                                     <li key={submission.id}>{submission.student} - Submitted on {submission.date}</li>
//                                 ))}
//                             </ul>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 <Col md="6">
//                     <Card>
//                         <CardHeader><FaBullhorn /> Announcements</CardHeader>
//                         <CardBody>
//                             <ul>
//                                 {announcements.map(announcement => (
//                                     <li key={announcement.id}>{announcement.title} - Posted on {announcement.date}</li>
//                                 ))}
//                             </ul>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader><FaTasks /> Pending Tasks</CardHeader>
//                         <CardBody>
//                             <ul>
//                                 {tasks.map(task => (
//                                     <li key={task.id}>{task.task} - Due by {task.due}</li>
//                                 ))}
//                             </ul>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 <Col>
//                     <Card>
//                         <CardHeader>Student Performance</CardHeader>
//                         <CardBody>
//                             <LineChart data={chartData} labels={chartLabels} />
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className="mt-4">
//                 <Col>
//                     <div className="text-center">
//                         <Button color="primary" onClick={() => alert('Create Assignment clicked!')}>
//                             Create Assignment
//                         </Button>
//                         <Button color="secondary" onClick={() => alert('Message Students clicked!')}>
//                             Message Students
//                         </Button>
//                         <Button color="success" onClick={() => alert('Access Student Data clicked!')}>
//                             Access Student Data
//                         </Button>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Dashboard;





// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const ClassManagement = () => {
//     const [classes, setClasses] = useState([]);
//     const [className, setClassName] = useState('');
//     const [students, setStudents] = useState([]);
//     const [studentName, setStudentName] = useState('');

//     const addClass = () => {
//         setClasses([...classes, { name: className, students: [] }]);
//         setClassName('');
//     };

//     const addStudent = (classIndex) => {
//         const updatedClasses = [...classes];
//         updatedClasses[classIndex].students.push(studentName);
//         setClasses(updatedClasses);
//         setStudentName('');
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Class Management</h2>
//             <Row>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader>Create and Manage Classes</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="className">Class Name</Label>
//                                     <Input
//                                         type="text"
//                                         id="className"
//                                         value={className}
//                                         onChange={(e) => setClassName(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <Button color="primary" onClick={addClass}>Add Class</Button>
//                             </Form>
//                             <ul className="mt-4">
//                                 {classes.map((classItem, index) => (
//                                     <li key={index}>
//                                         <strong>{classItem.name}</strong>
//                                         <ul>
//                                             {classItem.students.map((student, i) => (
//                                                 <li key={i}>{student}</li>
//                                             ))}
//                                         </ul>
//                                         <Form inline>
//                                             <FormGroup>
//                                                 <Input
//                                                     type="text"
//                                                     placeholder="Add student"
//                                                     value={studentName}
//                                                     onChange={(e) => setStudentName(e.target.value)}
//                                                 />
//                                             </FormGroup>
//                                             <Button
//                                                 color="secondary"
//                                                 onClick={() => addStudent(index)}
//                                             >
//                                                 Add Student
//                                             </Button>
//                                         </Form>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ClassManagement;







// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios'; // For making HTTP requests

// const ResourceUpload = () => {
//     const [file, setFile] = useState(null);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [resourceType, setResourceType] = useState('PDF'); // Default type
//     const [uploading, setUploading] = useState(false);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = async () => {
//         if (!file || !title) {
//             alert('Please provide all required information.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('type', resourceType);

//         setUploading(true);

//         try {
//             await axios.post('/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             alert('File uploaded successfully.');
//         } catch (error) {
//             alert('Failed to upload file.');
//         } finally {
//             setUploading(false);
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Upload Resource</h2>
//             <Row>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader>Upload and Organize Resources</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="title">Resource Title</Label>
//                                     <Input
//                                         type="text"
//                                         id="title"
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="description">Description</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="description"
//                                         value={description}
//                                         onChange={(e) => setDescription(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="resourceType">Resource Type</Label>
//                                     <Input
//                                         type="select"
//                                         id="resourceType"
//                                         value={resourceType}
//                                         onChange={(e) => setResourceType(e.target.value)}
//                                     >
//                                         <option>PDF</option>
//                                         <option>DOCX</option>
//                                         <option>PPT</option>
//                                         <option>Video</option>
//                                     </Input>
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="file">Select File</Label>
//                                     <Input
//                                         type="file"
//                                         id="file"
//                                         onChange={handleFileChange}
//                                     />
//                                 </FormGroup>
//                                 <Button
//                                     color="primary"
//                                     onClick={handleUpload}
//                                     disabled={uploading}
//                                 >
//                                     {uploading ? 'Uploading...' : 'Upload Resource'}
//                                 </Button>
//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ResourceUpload;



// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
// import axios from 'axios';

// const AssignmentCreation = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [deadline, setDeadline] = useState('');
//     const [gradingCriteria, setGradingCriteria] = useState('');
//     const [creating, setCreating] = useState(false);
//     const [submissions, setSubmissions] = useState([]);
//     const [feedback, setFeedback] = useState({});
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const fetchSubmissions = async () => {
//             try {
//                 const response = await axios.get('/api/submissions');
//                 setSubmissions(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch submissions:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSubmissions();
//     }, []);

//     const handleFeedbackChange = (submissionId, feedback) => {
//         setFeedback((prevFeedback) => ({
//             ...prevFeedback,
//             [submissionId]: feedback,
//         }));
//     };

//     const handleSubmitFeedback = async (submissionId) => {
//         try {
//             await axios.post(`/api/submissions/${submissionId}/feedback`, { feedback: feedback[submissionId] });
//             alert('Feedback submitted successfully.');
//         } catch (error) {
//             alert('Failed to submit feedback.');
//         }
//     };

//     const handleCreate = async () => {
//         if (!title || !description || !deadline || !gradingCriteria) {
//             alert('Please provide all required information.');
//             return;
//         }

//         const assignment = {
//             title,
//             description,
//             deadline,
//             gradingCriteria,
//         };

//         setCreating(true);

//         try {
//             await axios.post('/api/assignments', assignment);
//             alert('Assignment created successfully.');
//         } catch (error) {
//             alert('Failed to create assignment.');
//         } finally {
//             setCreating(false);
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Create Assignment</h2>
//             <Row>
//                 <Col md="6">
//                     <Card>
//                         <CardHeader>Assignment Details</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="title">Assignment Title</Label>
//                                     <Input
//                                         type="text"
//                                         id="title"
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="description">Description</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="description"
//                                         value={description}
//                                         onChange={(e) => setDescription(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="deadline">Deadline</Label>
//                                     <Input
//                                         type="datetime-local"
//                                         id="deadline"
//                                         value={deadline}
//                                         onChange={(e) => setDeadline(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="gradingCriteria">Grading Criteria</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="gradingCriteria"
//                                         value={gradingCriteria}
//                                         onChange={(e) => setGradingCriteria(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <Button
//                                     color="primary"
//                                     onClick={handleCreate}
//                                     disabled={creating}
//                                 >
//                                     {creating ? 'Creating...' : 'Create Assignment'}
//                                 </Button>
//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//                 <h2 className="my-4 text-center">Manage Submissions</h2>
//                 <Col md="12">
//                     <Card>
//                         <CardHeader>Submissions</CardHeader>
//                         <CardBody>
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : (
//                                 <Table>
//                                     <thead>
//                                         <tr>
//                                             <th>Student Name</th>
//                                             <th>Assignment</th>
//                                             <th>Submission Date</th>
//                                             <th>View Work</th>
//                                             <th>Feedback</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {submissions.map(submission => (
//                                             <tr key={submission.id}>
//                                                 <td>{submission.studentName}</td>
//                                                 <td>{submission.assignmentTitle}</td>
//                                                 <td>{new Date(submission.submissionDate).toLocaleString()}</td>
//                                                 <td>
//                                                     <a href={submission.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
//                                                 </td>
//                                                 <td>
//                                                     <FormGroup>
//                                                         <Label for={`feedback-${submission.id}`}>Feedback</Label>
//                                                         <Input
//                                                             type="textarea"
//                                                             id={`feedback-${submission.id}`}
//                                                             value={feedback[submission.id] || ''}
//                                                             onChange={(e) => handleFeedbackChange(submission.id, e.target.value)}
//                                                         />
//                                                         <Button
//                                                             color="primary"
//                                                             onClick={() => handleSubmitFeedback(submission.id)}
//                                                         >
//                                                             Submit Feedback
//                                                         </Button>
//                                                     </FormGroup>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </Table>
//                             )}
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default AssignmentCreation;






// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';

// const GradingTools = () => {
//     const [submissions, setSubmissions] = useState([]);
//     const [grades, setGrades] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchSubmissions = async () => {
//             try {
//                 const response = await axios.get('/api/submissions');
//                 setSubmissions(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch submissions:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchSubmissions();
//     }, []);

//     const handleGradeChange = (submissionId, grade) => {
//         setGrades((prevGrades) => ({
//             ...prevGrades,
//             [submissionId]: grade,
//         }));
//     };

//     const handleSubmitGrade = async (submissionId) => {
//         try {
//             await axios.post(`/api/submissions/${submissionId}/grade`, { grade: grades[submissionId] });
//             alert('Grade submitted successfully.');
//         } catch (error) {
//             alert('Failed to submit grade.');
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Grade Submissions</h2>
//             <Row>
//                 <Col md="12">
//                     <Card>
//                         <CardHeader>Grading</CardHeader>
//                         <CardBody>
//                             {loading ? (
//                                 <p>Loading...</p>
//                             ) : (
//                                 <div>
//                                     {submissions.map(submission => (
//                                         <Card key={submission.id} className="mb-3">
//                                             <CardHeader>{submission.assignmentTitle} - {submission.studentName}</CardHeader>
//                                             <CardBody>
//                                                 <FormGroup>
//                                                     <Label for={`grade-${submission.id}`}>Grade</Label>
//                                                     <Input
//                                                         type="number"
//                                                         id={`grade-${submission.id}`}
//                                                         value={grades[submission.id] || ''}
//                                                         onChange={(e) => handleGradeChange(submission.id, e.target.value)}
//                                                         min="0"
//                                                         max="100"
//                                                     />
//                                                     <Button
//                                                         color="primary"
//                                                         onClick={() => handleSubmitGrade(submission.id)}
//                                                     >
//                                                         Submit Grade
//                                                     </Button>
//                                                 </FormGroup>
//                                             </CardBody>
//                                         </Card>
//                                     ))}
//                                 </div>
//                             )}
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default GradingTools;



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';
// import { Select } from '@mui/material';

// const ExperimentSharing = () => {
//     const [templates, setTemplates] = useState([]);
//     const [selectedTemplate, setSelectedTemplate] = useState('');
//     const [recipients, setRecipients] = useState([]);
//     const [preLabQuiz, setPreLabQuiz] = useState('');
//     const [preparationMaterials, setPreparationMaterials] = useState('');
//     const [sharing, setSharing] = useState(false);

//     useEffect(() => {
//         const fetchTemplates = async () => {
//             try {
//                 const response = await axios.get('/api/experiments');
//                 setTemplates(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch experiment templates:', error);
//             }
//         };

//         const fetchRecipients = async () => {
//             try {
//                 const response = await axios.get('/api/recipients');
//                 setRecipients(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch recipients:', error);
//             }
//         };

//         fetchTemplates();
//         fetchRecipients();
//     }, []);

//     const handleShare = async () => {
//         if (!selectedTemplate || !recipients.length) {
//             alert('Please select a template and recipients.');
//             return;
//         }

//         const sharingData = {
//             templateId: selectedTemplate,
//             recipients,
//             preLabQuiz,
//             preparationMaterials,
//         };

//         setSharing(true);

//         try {
//             await axios.post('/api/share', sharingData);
//             alert('Experiment shared successfully.');
//         } catch (error) {
//             alert('Failed to share experiment.');
//         } finally {
//             setSharing(false);
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Share Experiment Template</h2>
//             <Row>
//                 <Col md="8">
//                     <Card>
//                         <CardHeader>Share Experiment</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="template">Select Experiment Template</Label>
//                                     <Select
//                                         id="template"
//                                         value={selectedTemplate}
//                                         onChange={(e) => setSelectedTemplate(e.target.value)}
//                                     >
//                                         <option value="">Select a template</option>
//                                         {templates.map(template => (
//                                             <option key={template.id} value={template.id}>
//                                                 {template.title}
//                                             </option>
//                                         ))}
//                                     </Select>
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="recipients">Select Recipients</Label>
//                                     <Select
//                                         id="recipients"
//                                         multiple
//                                         value={recipients}
//                                         onChange={(e) => setRecipients(Array.from(e.target.selectedOptions, option => option.value))}
//                                     >
//                                         {/* Assuming recipients are in the form of an array of objects */}
//                                         {recipients.map(recipient => (
//                                             <option key={recipient.id} value={recipient.id}>
//                                                 {recipient.name}
//                                             </option>
//                                         ))}
//                                     </Select>
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="preLabQuiz">Pre-Lab Quiz (Optional)</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="preLabQuiz"
//                                         value={preLabQuiz}
//                                         onChange={(e) => setPreLabQuiz(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="preparationMaterials">Preparation Materials (Optional)</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="preparationMaterials"
//                                         value={preparationMaterials}
//                                         onChange={(e) => setPreparationMaterials(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <Button
//                                     color="primary"
//                                     onClick={handleShare}
//                                     disabled={sharing}
//                                 >
//                                     {sharing ? 'Sharing...' : 'Share Template'}
//                                 </Button>
//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ExperimentSharing;


// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input,  } from 'reactstrap';
// import axios from 'axios';
// import { TextField } from '@mui/material';

// const ExperimentTemplates = () => {
//     const [title, setTitle] = useState('');
//     const [objectives, setObjectives] = useState('');
//     const [materials, setMaterials] = useState('');
//     const [methods, setMethods] = useState('');
//     const [expectedOutcomes, setExpectedOutcomes] = useState('');
//     const [creating, setCreating] = useState(false);

//     const handleCreate = async () => {
//         if (!title || !objectives || !materials || !methods || !expectedOutcomes) {
//             alert('Please provide all required information.');
//             return;
//         }

//         const experiment = {
//             title,
//             objectives,
//             materials,
//             methods,
//             expectedOutcomes,
//         };

//         setCreating(true);

//         try {
//             await axios.post('/api/experiments', experiment);
//             alert('Experiment template created successfully.');
//         } catch (error) {
//             alert('Failed to create experiment template.');
//         } finally {
//             setCreating(false);
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Create Experiment Template</h2>
//             <Row>
//                 <Col md="8">
//                     <Card>
//                         <CardHeader>Experiment Details</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="title">Experiment Title</Label>
//                                     <Input
//                                         type="text"
//                                         id="title"
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="objectives">Objectives</Label>
//                                     <TextField
//                                         id="objectives"
//                                         value={objectives}
//                                         onChange={(e) => setObjectives(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="materials">Materials</Label>
//                                     <TextField
//                                         id="materials"
//                                         value={materials}
//                                         onChange={(e) => setMaterials(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="methods">Methods</Label>
//                                     <TextField
//                                         id="methods"
//                                         value={methods}
//                                         onChange={(e) => setMethods(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="expectedOutcomes">Expected Outcomes</Label>
//                                     <TextField
//                                         id="expectedOutcomes"
//                                         value={expectedOutcomes}
//                                         onChange={(e) => setExpectedOutcomes(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <Button
//                                     color="primary"
//                                     onClick={handleCreate}
//                                     disabled={creating}
//                                 >
//                                     {creating ? 'Creating...' : 'Create Template'}
//                                 </Button>
//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ExperimentTemplates;



// import React, { useState } from 'react';
// import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';

// const Announcements = () => {
//     const [title, setTitle] = useState('');
//     const [message, setMessage] = useState('');
//     const [scheduleDate, setScheduleDate] = useState('');
//     const [sending, setSending] = useState(false);

//     const handlePostAnnouncement = async () => {
//         if (!title || !message) {
//             alert('Please provide all required information.');
//             return;
//         }

//         const announcement = {
//             title,
//             message,
//             scheduleDate
//         };

//         setSending(true);

//         try {
//             await axios.post('/api/announcements', announcement);
//             alert('Announcement posted successfully.');
//         } catch (error) {
//             alert('Failed to post announcement.');
//         } finally {
//             setSending(false);
//         }
//     };

//     return (
//         <Container>
//             <h2 className="my-4 text-center">Post Announcement</h2>
//             <Row>
//                 <Col md="8">
//                     <Card>
//                         <CardHeader>Announcement Details</CardHeader>
//                         <CardBody>
//                             <Form>
//                                 <FormGroup>
//                                     <Label for="title">Title</Label>
//                                     <Input
//                                         type="text"
//                                         id="title"
//                                         value={title}
//                                         onChange={(e) => setTitle(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="message">Message</Label>
//                                     <Input
//                                         type="textarea"
//                                         id="message"
//                                         value={message}
//                                         onChange={(e) => setMessage(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <FormGroup>
//                                     <Label for="scheduleDate">Schedule Date (Optional)</Label>
//                                     <Input
//                                         type="datetime-local"
//                                         id="scheduleDate"
//                                         value={scheduleDate}
//                                         onChange={(e) => setScheduleDate(e.target.value)}
//                                     />
//                                 </FormGroup>
//                                 <Button
//                                     color="primary"
//                                     onClick={handlePostAnnouncement}
//                                     disabled={sending}
//                                 >
//                                     {sending ? 'Posting...' : 'Post Announcement'}
//                                 </Button>
//                             </Form>
//                         </CardBody>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Announcements;


import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

const Messaging = () => {
    const [recipients, setRecipients] = useState([]);
    const [selectedRecipient, setSelectedRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        // Fetch the list of recipients (students or groups)
        const fetchRecipients = async () => {
            try {
                const response = await axios.get('/api/recipients');
                setRecipients(response.data);
            } catch (error) {
                console.error('Failed to fetch recipients:', error);
            }
        };

        fetchRecipients();
    }, []);

    useEffect(() => {
        // Fetch messages for the selected recipient
        const fetchMessages = async () => {
            if (!selectedRecipient) return;

            try {
                const response = await axios.get(`/api/messages/${selectedRecipient}`);
                setMessages(response.data);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };

        fetchMessages();
    }, [selectedRecipient]);

    const handleSendMessage = async () => {
        if (!selectedRecipient || !message) {
            alert('Please select a recipient and provide a message.');
            return;
        }

        const messageData = {
            recipientId: selectedRecipient,
            message,
        };

        setSending(true);

        try {
            await axios.post('/api/messages', messageData);
            setMessage('');
            alert('Message sent successfully.');
            // Refresh messages after sending
            const response = await axios.get(`/api/messages/${selectedRecipient}`);
            setMessages(response.data);
        } catch (error) {
            alert('Failed to send message.');
        } finally {
            setSending(false);
        }
    };

    return (
        <Container>
            <h2 className="my-4 text-center">Messaging</h2>
            <Row>
                <Col md="4">
                    <Card>
                        <CardHeader>Select Recipient</CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label for="recipients">Recipient</Label>
                                <Input
                                    type="select"
                                    id="recipients"
                                    value={selectedRecipient}
                                    onChange={(e) => setSelectedRecipient(e.target.value)}
                                >
                                    <option value="">Select a recipient</option>
                                    {recipients.map(recipient => (
                                        <option key={recipient.id} value={recipient.id}>
                                            {recipient.name}
                                        </option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    {selectedRecipient && (
                        <Card>
                            <CardHeader>Conversation</CardHeader>
                            <CardBody>
                                <ListGroup>
                                    {messages.map((msg, index) => (
                                        <ListGroupItem key={index}>
                                            <strong>{msg.senderName}:</strong> {msg.text}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                                <FormGroup className="mt-3">
                                    <Label for="message">Your Message</Label>
                                    <Input
                                        type="textarea"
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </FormGroup>
                                <Button
                                    color="primary"
                                    onClick={handleSendMessage}
                                    disabled={sending}
                                >
                                    {sending ? 'Sending...' : 'Send Message'}
                                </Button>
                            </CardBody>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Messaging;
