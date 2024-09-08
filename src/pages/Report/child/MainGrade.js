import React from 'react';
import {
    Box, Typography, TextField, MenuItem, Button, Modal, Paper, Grid
} from '@mui/material';

const MainGrade = ({ label, field, value, setValue, grade, setGrade, handleOpenModal }) => {
    return (
        <Box>
            <Typography variant='subtitle1' style={{ textAlign: 'center', fontWeight: '700', textTransform: 'uppercase' }} align='center'>
                {label}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id={`${field}-date`}
                        // label="Date"
                        // type="date"
                        multiline
                        rows={4}
                        placeholder='Message goes here'
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Typography style={{fontWeight:'700',textTransform:'uppercase',textAlign:'center'}}>Make a grade here</Typography>
                    <TextField
                        id={`${field}-grade`}
                        select
                        label="Grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {[...Array(100).keys()].map((num) => (
                            <MenuItem key={num + 1} value={num + 1}>
                                {num + 1}
                            </MenuItem>
                        ))}
                    </TextField>
                    {handleOpenModal && (
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleOpenModal}
                            style={{ marginTop: '16px', background: '#000435' }}
                        >
                            Complete
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainGrade;
