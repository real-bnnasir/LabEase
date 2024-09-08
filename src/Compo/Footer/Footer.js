import { Box, Card } from '@mui/material'
import React from 'react'
import { Container } from 'reactstrap'
import './footer.css'

const Footer = () => {
  return (
    <footer className='d-flex justify-content-between align-items-center px-3'>
      <Card style={{ width: '100%', background:'#eee  '}} className='d-flex justify-content-between align-items-center px-3 p-3 shadow'>
        <Box>
          <span style={{ fontSize: '15px' }}>&copy; <span style={{ color: 'red' }}>2024</span> <span style={{ fontSize: '20px' }}>LabEase</span> </span>
          <p>All Right Reserved</p>
        </Box>
        <Box className="ftrlogo">
          <span>Developed by</span>
          <h3 style={{textAlign:'center'}} className='rbn'>RBN</h3>
        </Box>
      </Card>
    </footer>
  )
}

export default Footer
