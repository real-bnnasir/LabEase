import { Box, Button, ButtonGroup, Divider, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import SubHeader from '../SubHeader';

const Task_M = () => {

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
      
      <div className='d-flex justify-content-center align-items-center'>Task_M is not ready</div>
    </Box>
  )
}

export default Task_M