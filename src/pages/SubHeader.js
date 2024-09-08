import { Box, Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const SubHeader = () => {

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
            <Grid item container spacing={2} alignItems="center" display='flex' justifyContent='space-between' style={{ marginTop: '8px' }}>
                <Grid item>
                    <FormControl variant="outlined" style={{ minWidth: 200 }}>
                        <InputLabel id="course-select-label">Select Department</InputLabel>
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
            <Typography mb={2} variant='h6' style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '600' }}>{selectedCourse} {selectedCourse ? 'Department' : ''}</Typography>
        </Box>
    )
}

export default SubHeader
