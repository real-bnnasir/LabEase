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
                            <TableCell></TableCell>
                            <TableCell align="right">
                                <Button variant="contained" onClick={toggleCollapse} style={{ background: '#000435' }}>
                                    View
                                </Button>
                                {/* {group.taxStatus === 'Submitted' && (
                                    <Button variant="contained" onClick={toggleCollapse} style={{ background: '#000435' }}>
                                        View
                                    </Button>
                                )} */}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Collapse in={collapseOpen}>
                <TabView />
            </Collapse >

        </Box >
    );
};

export default GroupView;
