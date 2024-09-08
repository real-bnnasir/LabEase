import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Avatar, Button, Tooltip, Grid, Typography, ButtonGroup, FormControl, InputLabel, Select, MenuItem, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import me1 from '../../Assets/Photos/me1.jpeg';
import me2 from '../../Assets/Photos/me2.jpg';
import malik from '../../Assets/Photos/malik.jpg';
import zaks from '../../Assets/Photos/zaks.jpg';
import yaya from '../../Assets/Photos/yaya.JPG';
import SubHeader from '../SubHeader';

const HoverAvatar = styled(Avatar)({
  width: 40,
  height: 40,
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

export const initialGroups = [
  // Initial groups data
  {
    id: 1, segment: 'A', members: [
      { name: 'Abdurrahman Nasir', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG124', status: 'Carry Over' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG125', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG126', status: 'Spill Over' },
      { name: 'Real Bn Nasir', registrationNumber: 'REG127', status: 'Regular' }
    ], taxStatus: 'Submitted'
  },
  {
    id: 1, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Failed'
  },
  {
    id: 2, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Submitted'
  },
  {
    id: 2, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Failed'
  },
  {
    id: 3, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Submitted'
  },
  {
    id: 3, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Failed'
  },
  {
    id: 4, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Submitted'
  },
  {
    id: 4, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Failed'
  },
  {
    id: 5, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', registrationNumber: 'REG123', status: 'Regular' }, // No photo provided
      ]
    , taxStatus: 'Submitted'
  },
  {
    id: 5, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Failed'
  },
  {
    id: 6, segment: 'A', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Submitted'
  },
  {
    id: 6, segment: 'B', members:
      [
        { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
        { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
      ], taxStatus: 'Failed'
  },
  {
    id: 8, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Submitted'
  },
  {
    id: 8, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Failed'
  },
  {
    id: 10, segment: 'A', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
    ], taxStatus: 'Submitted'
  },
  {
    id: 10, segment: 'B', members: [
      { name: 'Abdurrahman Nasir  ', photo: me1, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Zakariyya Sani', photo: zaks, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Yahya Abba', photo: yaya, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Abdulmalik Umar', photo: malik, registrationNumber: 'REG123', status: 'Regular' },
      { name: 'Real Bn Nasir', photo: me2, registrationNumber: 'REG123', status: 'Regular' },
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
  const [viewGroup, setViewGroup] = useState(null); // State to track the group to be viewed
  const navigate = useNavigate();

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
    setGroups([...groups, { ...newGroup, members: [] }]);
    setOpen(false);
    setNewGroup({ id: '', segment: '' });
  };

  const isFormValid = newGroup.id !== '' && newGroup.segment !== '';

  let currentGroup = null;
  let stripe = false;

  const handleViewClick = (group) => {
    navigate(`/reportview/${group.id}/${group.segment}`);
  };

  const handleViewClose = () => {
    setViewGroup(null);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Grid container direction="column" style={{ padding: '16px' }}>
          <Grid item>
            <Button variant="contained" component={Link} to="/dashboard" style={{ background: '#000435' }}>Back</Button>
            <Typography variant="h6" textAlign='center'>Report</Typography>
          </Grid>
          <Divider />
          <SubHeader />

          <Divider />
          {/* <Grid container item display='flex' justifyContent='center' alignItems='center'>
            <Typography style={{ fontWeight: '700' }}>{selectedCourse} {selectedCourse ? 'Department' : ''}</Typography>
          </Grid> */}
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
                    <Button variant="contained" onClick={() => handleViewClick(group)} style={{ width: '50%', background: '#000435' }}>View</Button>
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
              value={newGroup.id}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              name="segment"
              label="Segment"
              type="text"
              fullWidth
              value={newGroup.segment}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" disabled={!isFormValid}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={viewGroup !== null} onClose={handleViewClose}>
          <DialogTitle>Group Details</DialogTitle>
          <DialogContent>
            {viewGroup && (
              <Box>
                <Typography variant="h6">Group {viewGroup.id}-{viewGroup.segment}</Typography>
                <Typography variant="subtitle1">Members:</Typography>
                <ul>
                  {viewGroup.members.map((member, idx) => (
                    <li key={idx}>
                      <Tooltip title={member.name} arrow>
                        <HoverAvatar src={member.photo || undefined} alt={member.name} />
                      </Tooltip>
                      {member.name}
                    </li>
                  ))}
                </ul>
                <Typography variant="subtitle1">Tax Status: {viewGroup.taxStatus}</Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleViewClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleOpen} style={{ marginTop: '16px', background: '#000435' }}>
          Add New Group
        </Button>
      </div>
    </Box>
  );
};

export default Report;
