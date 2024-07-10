import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button, Box, Avatar, Typography, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal
} from '@mui/material';
import { IoArrowBack } from 'react-icons/io5';
import { initialGroups } from './Report'; // Adjust the path accordingly
import { Collapse, Card, CardContent } from '@mui/material';

const GroupView = () => {
    const navigate = useNavigate();
    const { groupId, segment } = useParams();
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [collapseOpen, setCollapseOpen] = useState(false);

    const group = initialGroups.find(
        (g) => g.id.toString() === groupId && g.segment === segment
    );

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleEditGroupMembers = () => {
        // Logic for editing group members (e.g., navigate to an edit page)
    };

    const handleAvatarClick = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedMember(null);
    };

    const toggleCollapse = () => {
        setCollapseOpen(!collapseOpen);
    };

    return (
        <Box p={2}>
            <Button
                variant="contained"
                startIcon={<IoArrowBack />}
                onClick={handleGoBack}
                style={{ marginBottom: '16px', background: '#000435' }}
            >
                Go Back
            </Button>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', justifyContent: 'center', background: '#000435', color: 'white' }}>
                Group <span style={{ fontWeight: "700" }}>{groupId}-{segment} </span> Details
            </Typography>
            <Typography variant='h4' style={{ fontWeight: '700', display: 'flex', justifyContent: "center", color: "#000435" }}>Members</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Profile</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Registration Number</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {group?.members.map((member, idx) => (
                            <TableRow key={idx}>
                                <TableCell>
                                    <Avatar
                                        src={member.photo || undefined}
                                        alt={member.name}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleAvatarClick(member)}
                                    />
                                </TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.registrationNumber}</TableCell>
                                <TableCell>{member.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditGroupMembers}
                    style={{ marginTop: '16px', background: '#000435' }}
                >
                    Edit Group Members
                </Button>
            </div>

            <Typography variant='h4' style={{ fontWeight: '700', display: 'flex', justifyContent: "center", color: "#000435", marginTop: '32px' }}>Tax Details</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{group.taxStatus}</TableCell>
                            <TableCell align="right">
                                <Button variant="contained" onClick={toggleCollapse} style={{ background: '#000435' }}>
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                                <Collapse in={collapseOpen}>
                                    <Card>
                                        <CardContent>
                                            {/* Your tax details content here */}
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Tax Details content goes here. This can include more information about the tax status.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box
                    bgcolor="background.paper"
                    p={2}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 300,
                        height: 350,
                    }}
                >
                    {selectedMember && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                {selectedMember.name}
                            </Typography>
                            <img src={selectedMember.photo} alt="Profile" style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default GroupView;
