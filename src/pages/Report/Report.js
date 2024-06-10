import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Avatar, Button, Tooltip, Grid, Typography, ButtonGroup, FormControl, InputLabel, Select, MenuItem, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import me1 from '../../Assets/Photos/me1.jpeg';
import me2 from '../../Assets/Photos/me2.jpg';
import malik from '../../Assets/Photos/malik.jpg';
import zaks from '../../Assets/Photos/zaks.jpg';
import yaya from '../../Assets/Photos/yaya.JPG';

const HoverAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  display: 'flex',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const StyledTableHeadRow = styled(TableRow)({
  backgroundColor: 'transparent',
  borderBottom: '2px solid #e0e0e0',
  borderTop: '2px solid #e0e0e0',
});

const StripedTableRow = styled(TableRow)(({ stripe }) => ({
  backgroundColor: stripe ? '#f9f9f9' : '#ffffff',
}));


const initialGroups = [
  {
    id: 1, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir' }, // No photo provided
      ]
    , taxStatus: 'Submitted'
  },
  {
    id: 1, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Failed'
  },
  {
    id: 2, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Submitted'
  },
  {
    id: 2, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Failed'
  },
  {
    id: 3, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Submitted'
  },
  {
    id: 3, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Failed'
  },
  {
    id: 4, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Submitted'
  },
  {
    id: 4, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Failed'
  },
  {
    id: 5, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir' }, // No photo provided
      ]
    , taxStatus: 'Submitted'
  },
  {
    id: 5, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Failed'
  },
  {
    id: 6, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Submitted'
  },
  {
    id: 6, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1 },
        { name: 'Zakariyya Sani', photo: zaks },
        { name: 'Yahya Abba', photo: yaya },
        { name: 'Abdulmalik Umar', photo: malik },
        { name: 'Real Bn Nasir', photo: me2 },
      ], taxStatus: 'Failed'
  },
  {
    id: 8, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Submitted'
  },
  {
    id: 8, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Failed'
  },
  {
    id: 10, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Submitted'
  },
  {
    id: 10, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1 },
      { name: 'Zakariyya Sani', photo: zaks },
      { name: 'Yahya Abba', photo: yaya },
      { name: 'Abdulmalik Umar', photo: malik },
      { name: 'Real Bn Nasir', photo: me2 },
    ], taxStatus: 'Failed'
  },
  // Add more groups as needed
];


const Report = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [open, setOpen] = useState(false);
  const [groups, setGroups] = useState(initialGroups);
  const [newGroup, setNewGroup] = useState({ id: '', segment: '' });

  let currentGroup = null;
  let stripe = false;

  const handleButtonClick = (level) => {
    setSelectedLevel(level);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleSubmit = () => {
    // Add the new group to the list
    setGroups([...groups, { ...newGroup, members: [], taxStatus: 'Submitted' }]);
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Grid container direction="column" style={{ padding: '16px' }}>
        <Grid item >
          <TableCell>
            <Button variant="contained" component={Link} to="/dashboard">Back</Button>
          </TableCell>
          <Typography variant="h6" textAlign='center'>Report</Typography>
        </Grid>
        <Divider />
        <Grid item container spacing={2} alignItems="center" display='flex' justifyContent='space-between' style={{ marginTop: '8px' }}>
          <Grid item>
            <FormControl variant="outlined" style={{ minWidth: 200 }}>
              <InputLabel id="course-select-label">Select Course</InputLabel>
              <Select
                labelId="course-select-label"
                value={selectedCourse}
                onChange={handleCourseChange}
                label="Select Course"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Chemistry">Chemistry</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
                <MenuItem value="Computer Science">Computer Science</MenuItem>
                <MenuItem value="Environmental Science">Environmental Science</MenuItem>
                <MenuItem value="Astronomy">Astronomy</MenuItem>
                <MenuItem value="Geology">Geology</MenuItem>
                <MenuItem value="Statistics">Statistics</MenuItem>
                <MenuItem value="Biotechnology">Biotechnology</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <ButtonGroup variant="contained">
              {[1, 2, 3, 4].map((level) => (
                <Button
                  key={level}
                  onClick={() => handleButtonClick(level)}
                  style={{
                    backgroundColor: selectedLevel === level ? 'white' : 'initial',
                    color: selectedLevel === level ? 'black' : 'initial',
                  }}
                >
                  Level {level}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleOpen} style={{ marginTop: '16px' }}>
          Add New Group
        </Button>
      </Grid>
      <Table>
        <TableHead>
          <StyledTableHeadRow>
            <TableCell>Group</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>Tax Status</TableCell>
            <TableCell>Action</TableCell>
          </StyledTableHeadRow>
        </TableHead>
        <TableBody>
          {groups.map((group, index) => {
            if (group.id !== currentGroup) {
              currentGroup = group.id;
              stripe = !stripe;
            }
            return (
              <StripedTableRow key={index} stripe={stripe}>
                <TableCell>Group {group.id}-{group.segment}</TableCell>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {group.members.map((member, idx) => (
                      <Tooltip title={member.name} key={idx} arrow>
                        <HoverAvatar src={member.photo || undefined} alt={member.name} />
                      </Tooltip>
                    ))}
                  </div>
                </TableCell>
                <TableCell style={{ color: group.taxStatus === 'Submitted' ? 'green' : 'red' }}>
                  {group.taxStatus}
                </TableCell>
                <TableCell>
                  <Button variant="contained">View</Button>
                </TableCell>
              </StripedTableRow>
            );
          })}
        </TableBody>
      </Table>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details for the new group.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="id"
            label="Group ID"
            type="number"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="segment"
            label="Segment"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default Report;