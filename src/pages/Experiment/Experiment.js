import { Box, Button, ButtonGroup, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import ExperimentList from './Experiments/ExperimentList'
import { useState } from 'react';
import SubHeader from '../SubHeader';

const Experiment = () => {

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleButtonClick = (level) => {
    setSelectedLevel(level);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };
  return (
    <Box>
      <SubHeader />
      
      <Divider />
      
      <Box mt={3}>
        <Box>
          <Typography variant='h5' style={{ textTransform: 'uppercase', textAlign: 'center' }}>First semister practicals schedule</Typography>
          <ExperimentList />
        </Box>
        <Box mt={3}>
          <Typography variant='h5' style={{ textTransform: 'uppercase', textAlign: 'center' }}>Second semister practicals schedule</Typography>
          <ExperimentList />
        </Box>
      </Box>
    </Box>
  )
}

export default Experiment