import React, { useEffect, useState } from 'react'
import { FaFacebook, FaHome, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import video from '../Settings/bgv.mp4'
import { AppBar, Avatar, Box, Card, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import pro from '../../Assets/Photos/zaks.jpg'
import { FaMessage, FaVoicemail } from 'react-icons/fa6';
import PropTypes from "prop-types";
import './Settings.css'

const Profile = ({ children }) => {
    const [tabValue, setTabValue] = useState(0);

    const handleSetTabValue = (event, newValue) => setTabValue(newValue);

    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };



    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        if (!avatar) return;

        const formData = new FormData();
        formData.append('avatar', avatar);
    }

    return (
        <div style={{ background: '#eee' }} className='pb-3 container pt-4'>
            <Box position="relative">
                <Box
                    display="flex"
                    alignItems="center"
                    position="relative"
                    minHeight="18.75rem"
                    borderRadius="xl"
                    sx={{
                        backgroundSize: "cover",
                        backgroundPosition: "50%",
                        overflow: "hidden",
                    }}
                >
                    <div className='profile-top'>
                        <video autoPlay muted loop id="background-video" style={{ width: '100%', height: 'auto', minHeight: '100%' }} className='rounded'>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </Box>
                <Card
                    sx={{
                        position: "relative",
                        mt: -8,
                        mx: 3,
                        py: 2,
                        px: 2,
                    }}
                >
                    <Grid container spacing={2} alignItems='center' borderBottom={0.5}>
                        <Grid item>
                            <Avatar src={pro} alt='profile-img' sizes='xl' shadow='sm' />
                        </Grid>
                        <Grid item>
                            <Box height='100%' mt={0.5} lineHeight={1}>
                                <Typography variant="h5" fontWeight="medium">Abdurrahman Nasir</Typography>
                                <Typography variant="button" color="text" fontWeight="regular"> CEO / Co-Founder</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
                            <AppBar position="static">
                                <Tabs orientation='horizantal' textColor='white' sx={{ background: '#000435' }} value={tabValue} onChange={handleSetTabValue}>
                                    <Tab
                                        label="App"
                                        icon={
                                            <FaHome />
                                        }
                                    />
                                    <Tab
                                        label="Message"
                                        icon={
                                            <FaVoicemail />
                                        }
                                    />
                                    <Tab
                                        label="Settings"
                                        icon={
                                            <FaMessage />
                                        }
                                    />
                                </Tabs>
                            </AppBar>
                        </Grid>
                    </Grid>
                    <Box mt={5} mb={2}>
                        <Grid container spacing={1}>
                            {/* <Grid item xs={12} md={6} xl={4}>
                                <Platformset />
                            </Grid> */}
                            {/* <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
                                <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
                                <Profileinfo
                                    title="profile information"
                                    description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                    info={{
                                        fullName: "Abdurrahman Nasir Baba",
                                        mobile: "(+234) 906 7393 633",
                                        email: "abdurrahmannasirbaba22gmail.com",
                                        location: "Nigeria",
                                    }}
                                    social={[
                                        {
                                            link: "https://www.facebook.com/CreativeTim/",
                                            icon: <FaFacebook />,
                                            color: "facebook",
                                        },
                                        {
                                            link: "https://twitter.com/creativetim",
                                            icon: <FaTwitter />,
                                            color: "twitter",
                                        },
                                        {
                                            link: "https://www.instagram.com/creativetimofficial/",
                                            icon: <FaInstagram />,
                                            color: "instagram",
                                        },
                                    ]}
                                    action={{ route: "", tooltip: "Edit Profile" }}
                                    shadow={false}
                                />
                            </Grid> */}
                            <h1>Profile</h1>
                            <div>
                                {preview && <img src={preview} alt="Avatar Preview" style={{ width: '150px', height: '150px' }} />}
                            </div>
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                            <button onClick={handleUpload}>Upload Profile Picture</button> 

                        </Grid>
                    </Box>
                    {children}
                </Card>
            </Box>
        </div>
    )
}

// Setting default props for the Header
Profile.defaultProps = {
    children: "",
};

// Typechecking props for the Header
Profile.propTypes = {
    children: PropTypes.node,
};

export default Profile