import { Box, Grid } from '@mui/material'
import React from 'react'
import Profile from './Profile'

const Settings = () => {
  return (
    <Box>
      <Grid container sx={3}>
        <Grid item sx={1} lg={12}>
          <Profile />
        </Grid>
      </Grid>
    <div className='d-flex justify-content-center align-items-center'>Settings is not ready
      </div>
    </Box>
  )
}

export default Settings