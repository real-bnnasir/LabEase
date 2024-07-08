import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button, Box, Avatar, Typography, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal
} from '@mui/material';
import { IoArrowBack } from 'react-icons/io5';
import { initialGroups } from './Report'; // Adjust the path accordingly

const GroupView = () => {
    const navigate = useNavigate();
    const { groupId, segment } = useParams();
    const [open, setOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

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

    return (
        <Box p={2}>
            <Button
                variant="contained"
                startIcon={<IoArrowBack />}
                onClick={handleGoBack}
                style={{ marginBottom: '16px' }}
            >
                Go Back
            </Button>
            <Typography variant="h4" gutterBottom>
                Group {groupId}-{segment} Details
            </Typography>
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
            <Button
                variant="contained"
                color="primary"
                onClick={handleEditGroupMembers}
                style={{ marginTop: '16px' }}
            >
                Edit Group Members
            </Button>
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
