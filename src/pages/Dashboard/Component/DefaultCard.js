import React from 'react'
import { Box, Card, Divider, Typography } from '@mui/material'
import { FaHome } from "react-icons/fa";

const DefaultCard = ({ title, description, value, bgcolor, iconBgColor,icon,typocolor,descriptionbg,descriptioncolor,variant,fontSize }) => {
  return (
    <Card sx={{ backgroundColor: bgcolor }}>
      <Box p={2} mx={3} display="flex" justifyContent="center">
        <Box
          display="grid"
          justifyContent="center"
          alignItems="center"
          color="white"
          width="4rem"
          height="4rem"
          shadow="md"
          borderRadius="100px"
          variant="gradient"
          sx={{
            background: iconBgColor,
          }}
        >
          {icon}
          {/* <FaHome style={{fontSize:'25px'}} /> */}
        </Box>
      </Box>
      <Box pb={2} px={2} textAlign="center" lineHeight={1.25}>
        <Typography variant="h6" fontWeight="medium" textTransform="capitalize" color={typocolor} >{title}</Typography>
        <Typography variant="caption" fontWeight="regular" color={descriptioncolor} sx={{background: descriptionbg,padding:'5px',borderRadius:'10px'}} >{description}</Typography>
        <Divider />
        <Typography variant={variant} fontSize={fontSize} fontWeight="medium" color={typocolor} sx={{fontWeight:'700'}} >{value}</Typography>
      </Box>
    </Card>
  )
}

export default DefaultCard