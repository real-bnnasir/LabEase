import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button, Box, Avatar, Typography,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from '@mui/material';
import { IoArrowBack } from 'react-icons/io5';
import { initialGroups } from '../Report/Report'; // Adjust the path accordingly
import { Collapse } from '@mui/material';
import TabView from '../Report/child/TabView';

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
                        {group.members.map((member, idx) => (
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

        </Box >
    );
};

export default GroupView;
